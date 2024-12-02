export const parser = "babel";
const fs = require("fs");
const path = require("path");
import { componentsImportMap } from "./componentsImportList";

const extractComponents = (controller, ast) => {
  const componentsList = new Set();
  const codeVariables = [];

  ast.find(controller.VariableDeclaration).forEach((item) => {
    codeVariables.push(item.value.declarations[0].id.name);
  });

  ast.find(controller.JSXIdentifier).forEach((item) => {
    if (item.parentPath.name === "openingElement") {
      componentsList.add(item.value.name);
    }
  });

  ast.find(controller.JSXAttribute).forEach((item) => {
    if (item.value.name.name === "as" && item.value.value.expression.name) {
      componentsList.add(item.value.value.expression.name);
    }
  });

  ast.find(controller.ConditionalExpression).forEach((item) => {
    if (item.value.consequent?.name) {
      componentsList.add(item.value.consequent.name);
    }
    if (item.value.alternate?.name) {
      if (item.value.alternate.name !== "undefined") {
        componentsList.add(item.value.alternate.name);
      }
    }
  });

  ast.find(controller.Identifier).forEach((item) => {
    if (item.value.name === "React") {
      componentsList.add(item.value.name);
    }
    if (item.value.name === "Platform") {
      componentsList.add(item.value.name);
    }
    if (item.value.name === "colors") {
      componentsList.add(item.value.name);
    }
    if (item.value.name === "useToast") {
      componentsList.add(item.value.name);
    }
    if (item.value.name === "createIcon") {
      componentsList.add(item.value.name);
    }
  });

  const updatedComponentsList = Array.from(componentsList).filter(
    (element) => !codeVariables.includes(element)
  );
  // console.log("updatedComponentsList", updatedComponentsList);

  return updatedComponentsList;
};

function generateImports(componentsList, controller) {
  const matchedComponentsImport = Object.entries(componentsImportMap)
    .map(([key, value]) => {
      // Filter the items in the value array that are present in componentsList
      const filteredComponents = value.filter((item) =>
        componentsList.includes(item)
      );

      // Return the object only if the filteredComponents array is not empty
      if (filteredComponents.length > 0) {
        return { [key]: filteredComponents };
      }
      // Return undefined for empty filteredComponents arrays (this will be filtered out)
      return undefined;
    })
    .filter((item) => item !== undefined); // Remove undefined entries
  // console.log("matchedComponentsImport", matchedComponentsImport);

  const leftComponents = componentsList.filter(
    (component) =>
      !matchedComponentsImport.some((entry) =>
        Object.values(entry)[0].includes(component)
      )
  );
  // console.log("leftComponents", leftComponents);

  const allComponentsImport =
    leftComponents?.length > 0
      ? [
          ...matchedComponentsImport,
          { ["lucide-react-native"]: leftComponents },
        ]
      : [...matchedComponentsImport];
  // console.log("allComponentsImport", allComponentsImport);

  const importStatements = allComponentsImport.map((entry) => {
    // Since each entry is an object, we destructure it
    const [key, value] = Object.entries(entry)[0];
    // const importPath = `@/components/ui/${key}`;
    const importPath = (() => {
      switch (key) {
        case "react":
          return key;
        case "react-native":
          return key;
        case "tailwindcss/colors":
          return key;
        case "lucide-react-native":
          return key;
        case "react-native-svg":
          return key;
        default:
          return `@/components/ui/${key}`;
      }
    })();

    // Transform the array of strings into array of import specifiers
    const specifiers = value.map((componentName) => {
      if (key === "react") {
        return controller.importDefaultSpecifier(
          controller.identifier(componentName)
        );
      } else if (key === "tailwindcss/colors") {
        return controller.importDefaultSpecifier(
          controller.identifier(componentName)
        );
      } else {
        return controller.importSpecifier(controller.identifier(componentName));
      }
    });
    // console.log("specifiers", specifiers);

    // Creates an AST node representing a string literal earlier it was just a string
    const source = controller.stringLiteral(importPath);

    // importDeclaration is a function that creates an import declaration
    return controller.importDeclaration(specifiers, source);
  });
  return importStatements;
}

export default function transformer(file, api, options) {
  const controller = api.jscodeshift;
  const ast = controller(file.source);

  //extracting components
  const componentsList = extractComponents(controller, ast);
  // console.log("componentsList", componentsList);

  // Generate import statements for the matchedComponentsImport
  const importStatements = generateImports(componentsList, controller);
  // console.log("importStatements", importStatements);

  // The unshift method adds new elements at the start of the array.
  importStatements.forEach((item) => {
    ast.get().node.program.body.unshift(item);
  });
  // console.log("updatedFile", ast.get().node.program.body);

  const newFilePath = path.join(
    __dirname,
    "..",
    "components",
    "docs",
    "examples",
    options.componentName,
    "index.js"
  );

  // Ensure the output directory exists
  fs.mkdirSync(path.dirname(newFilePath), { recursive: true });

  // Write to the new file
  fs.writeFileSync(newFilePath, ast.toSource(), "utf-8");

  console.log(`✅ Processed ${options.componentName} successfully`);

  return file.source;
}
