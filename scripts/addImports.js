const fs = require("fs");
const path = require("path");

// Base path to the components folder
const componentsBasePath = path.join(__dirname, "..", "components", "ui");

// Regular expressions to detect component tags and 'as' prop usage
const componentRegex = /<([A-Za-z][A-Za-z0-9]*)/g;
const asPropRegex = /as\s*=\s*\{([^}]+)\}/g;
const localVariableRegex = /const\s+([A-Za-z][A-Za-z0-9]*)\s*=/g;

function extractComponents(code) {
  const components = new Set();
  const localVariables = new Set(); // To store locally defined variables
  let match;

  // Find and store local variable names
  while ((match = localVariableRegex.exec(code)) !== null) {
    localVariables.add(match[1]);
  }

  // Find component tags
  while ((match = componentRegex.exec(code)) !== null) {
    const componentName = match[1];
    if (!localVariables.has(componentName)) {
      components.add(componentName);
    }
  }

  // Check for 'colors.' in the code
  if (code.includes("colors.")) {
    components.add("colors");
  }

  // Check for 'Platform.' in the code
  if (code.includes("Platform.")) {
    components.add("Platform");
  }

  // Check for 'createIcon(' in the code
  if (code.includes("createIcon(")) {
    components.add("createIcon");
  }

  // Check for '<Path' and '<Rect' in the code
  if (code.includes("<Path")) {
    components.add("Path");
  }

  if (code.includes("<Rect")) {
    components.add("Rect");
  }

  // Check for 'as' prop usage
  while ((match = asPropRegex.exec(code)) !== null) {
    const asValue = match[1].trim();

    if (!localVariables.has(asValue)) {
      if (asValue.includes("?")) {
        // Handle conditional expressions like `showPassword ? EyeIcon : EyeOffIcon`
        const conditionalIcons = asValue
          .split("?")[1] // Extract the part after '?'
          .split(":") // Split the true and false values
          .map((icon) => icon.trim()); // Remove extra spaces

        // Add both icons from the conditional expression
        conditionalIcons.forEach((icon) => components.add(icon));
      } else {
        // Direct usage of a single component
        components.add(asValue);
      }
    }
  }

  // Extract hooks starting with 'use'
  const hookRegex = /\buse[A-Za-z0-9]+/g;
  while ((match = hookRegex.exec(code)) !== null) {
    const hook = match[0];
    if (hook.startsWith("use")) {
      components.add(hook); // Add hooks like useState, useEffect, etc.
    }
  }

  return Array.from(components);
}

// Function to get exported components from a file
function getExportedComponents(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Regular expression to match all export { ... } statements, including aliases
  const exportRegex = /export\s*{([^}]+)}/g;

  let matches;
  const exportedComponents = [];

  // Find all export statements
  while ((matches = exportRegex.exec(fileContent)) !== null) {
    // Split the matched export into individual components
    const components = matches[1]
      .split(",")
      .map((component) => component.trim());

    // Process each component to get the final exported name
    components.forEach((component) => {
      const aliasMatch = component.match(/(\w+)\s+as\s+(\w+)/);
      if (aliasMatch) {
        // Add the alias (final exported name)
        exportedComponents.push(aliasMatch[2]);
      } else {
        // Add the component name directly if no alias is present
        exportedComponents.push(component);
      }
    });
  }

  return exportedComponents;
}

function handleImports(leftComponents, imports) {
  // Filter out the components that start with 'use' (hooks)
  const hooks = leftComponents.filter((comp) => comp.startsWith("use"));
  // Filter out the components that are 'colors'
  const colors = leftComponents.filter((comp) => comp === "colors");

  const platform = leftComponents.filter((comp) => comp === "Platform");

  // Filter for specific components to import from 'react-native-svg'
  const svgComponents = leftComponents.filter((comp) =>
    ["Path", "Rect"].includes(comp)
  );

  const formControlComponents = leftComponents.filter((comp) =>
    comp.startsWith("FormControl")
  );

  const alertDialogComponents = leftComponents.filter((comp) =>
    comp.startsWith("AlertDialog")
  );

  const imageBackgroundComponents = leftComponents.filter((comp) =>
    comp.startsWith("ImageBackground")
  );

  const inputAccessoryViewComponents = leftComponents.filter((comp) =>
    comp.startsWith("InputAccessoryView")
  );

  const keyboardAvoidingViewComponents = leftComponents.filter((comp) =>
    comp.startsWith("KeyboardAvoidingView")
  );

  const refreshControlComponents = leftComponents.filter((comp) =>
    comp.startsWith("RefreshControl")
  );

  const safeAreaViewComponents = leftComponents.filter((comp) =>
    comp.startsWith("SafeAreaView")
  );

  const scrollViewComponents = leftComponents.filter((comp) =>
    comp.startsWith("ScrollView")
  );

  const sectionListComponents = leftComponents.filter((comp) =>
    comp.startsWith("SectionList")
  );

  const statusBarComponents = leftComponents.filter((comp) =>
    comp.startsWith("StatusBar")
  );

  const virtualizedListComponents = leftComponents.filter((comp) =>
    comp.startsWith("VirtualizedList")
  );

  if (hooks.length > 0) {
    // imports.push(`import React, { ${hooks.join(", ")} } from 'react';`);
    imports.push(`import React from 'react';`);
  }

  if (colors.length > 0) {
    imports.push(`import colors from 'tailwindcss/colors';`);
  }

  if (platform.length > 0) {
    imports.push(`import { Platform } from 'react-native';`);
  }

  // Generate a single import statement if there are components to import
  if (svgComponents.length > 0) {
    imports.push(
      `import { ${svgComponents.join(", ")} } from 'react-native-svg';`
    );
  }

  if (formControlComponents.length > 0) {
    imports.push(
      `import { ${formControlComponents.join(", ")} } from '@/components/ui/form-control';`
    );
  }

  if (alertDialogComponents.length > 0) {
    imports.push(
      `import { ${alertDialogComponents.join(", ")} } from '@/components/ui/alert-dialog';`
    );
  }

  if (imageBackgroundComponents.length > 0) {
    imports.push(
      `import { ${imageBackgroundComponents.join(", ")} } from '@/components/ui/image-background';`
    );
  }

  if (inputAccessoryViewComponents.length > 0) {
    imports.push(
      `import { ${inputAccessoryViewComponents.join(", ")} } from '@/components/ui/input-accessory-view';`
    );
  }

  if (keyboardAvoidingViewComponents.length > 0) {
    imports.push(
      `import { ${keyboardAvoidingViewComponents.join(", ")} } from '@/components/ui/keyboard-avoiding-view';`
    );
  }

  if (refreshControlComponents.length > 0) {
    imports.push(
      `import { ${refreshControlComponents.join(", ")} } from '@/components/ui/refresh-control';`
    );
  }

  if (safeAreaViewComponents.length > 0) {
    imports.push(
      `import { ${safeAreaViewComponents.join(", ")} } from '@/components/ui/safe-area-view';`
    );
  }

  if (scrollViewComponents.length > 0) {
    imports.push(
      `import { ${scrollViewComponents.join(", ")} } from '@/components/ui/scroll-view';`
    );
  }

  if (sectionListComponents.length > 0) {
    imports.push(
      `import { ${sectionListComponents.join(", ")} } from '@/components/ui/section-list';`
    );
  }

  if (statusBarComponents.length > 0) {
    imports.push(
      `import { ${statusBarComponents.join(", ")} } from '@/components/ui/status-bar';`
    );
  }

  if (virtualizedListComponents.length > 0) {
    imports.push(
      `import { ${virtualizedListComponents.join(", ")} } from '@/components/ui/virtualized-list';`
    );
  }

  const processedComponents = [
    ...hooks,
    ...colors,
    ...platform,
    ...svgComponents,
    ...formControlComponents,
    ...alertDialogComponents,
    ...imageBackgroundComponents,
    ...inputAccessoryViewComponents,
    ...keyboardAvoidingViewComponents,
    ...refreshControlComponents,
    ...safeAreaViewComponents,
    ...scrollViewComponents,
    ...sectionListComponents,
    ...statusBarComponents,
    ...virtualizedListComponents,
  ];

  return { processedComponents, imports };
}

// Function to generate import statements based on component usage
function generateImports(components) {
  const imports = [];
  let isIconImported = false; // Flag to control when to add icon import only once
  const importedComponents = []; // Track imported components

  components.forEach((component) => {
    let componentPath;

    // Check if component name ends with "Icon"
    if (component.endsWith("Icon")) {
      componentPath = path.join(componentsBasePath, "icon", "index.tsx");
    } else {
      componentPath = path.join(
        componentsBasePath,
        component.toLowerCase(),
        "index.tsx"
      );
    }

    if (fs.existsSync(componentPath)) {
      // Get exported components from the index.tsx file
      const exportedComponents = getExportedComponents(componentPath);
      const neededComponents = exportedComponents.filter((exp) =>
        components.includes(exp)
      );

      // Check if all components are icons
      let isAllIcons = false;
      if (neededComponents.every((comp) => comp.endsWith("Icon"))) {
        isAllIcons = true;
      }

      if (neededComponents.length > 0) {
        // If all components are icons, import from the icon folder
        if (isAllIcons) {
          if (!isIconImported) {
            imports.push(
              `import { ${neededComponents.join(", ")} } from '@/components/ui/icon';`
            );
            isIconImported = true; // Ensure we only add one import for icons
            importedComponents.push(...neededComponents);
          }
        } else {
          // Otherwise, import components from their respective paths
          imports.push(
            `import { ${neededComponents.join(", ")} } from '@/components/ui/${component.toLowerCase()}';`
          );
          importedComponents.push(...neededComponents);
        }
      }
    }
  });

  if (importedComponents.length === components.length) {
    return imports; // Return imports if all components are imported
  } else {
    // Find the remaining components that are not yet imported
    const leftComponents = components.filter(
      (comp) => !importedComponents.includes(comp)
    );

    // Rename 'abc' to 'importDetails' or 'updatedImports'
    const importDetails = handleImports(leftComponents, imports);

    const processedComponents = importDetails.processedComponents;

    // Filter out the remaining components that haven't been imported
    const remainingComponents = leftComponents.filter(
      (comp) => !processedComponents.includes(comp)
    );

    // Add missing components from 'lucide-react-native'
    if (remainingComponents.length > 0) {
      imports.push(
        `import { ${remainingComponents.join(", ")} } from 'lucide-react-native';`
      );
    }

    return imports; // Return the updated imports
  }
}

const components = [
  "accordion",
  "actionsheet",
  "alert",
  "alert-dialog",
  "avatar",
  "badge",
  "bottomsheet",
  "box",
  "button",
  "card",
  "center",
  "checkbox",
  "divider",
  "drawer",
  "fab",
  "form-control",
  "grid",
  "heading",
  "hstack",
  "icon",
  "image",
  "input",
  "link",
  "menu",
  "modal",
  "popover",
  "portal",
  "pressable",
  "progress",
  "radio",
  "select",
  "skeleton",
  "slider",
  "spinner",
  "switch",
  "table",
  "text",
  "textarea",
  "toast",
  "tooltip",
  "vstack",
];

// Function to process each component
async function processComponent(componentName) {
  const examplesFilePath = path.join(
    __dirname,
    "..",
    "components",
    "docs",
    "examples",
    componentName,
    "examples.js"
  );

  // Skip if examples file doesn't exist
  if (!fs.existsSync(examplesFilePath)) {
    console.log(
      `No examples file found for ${componentName}, giving empty array.`
    );

    const newFilePath = path.join(
      __dirname,
      "..",
      "components",
      "docs",
      "examples",
      componentName,
      "index.js"
    );

    const newFileContent = "export const examples = [];";

    try {
      // Ensure the output directory exists
      fs.mkdirSync(path.dirname(newFilePath), { recursive: true });

      // Write to the new file
      fs.writeFileSync(newFilePath, newFileContent, "utf-8");
      console.log(`File created successfully at: ${newFilePath}`);
    } catch (error) {
      console.error(`Error creating file at ${newFilePath}:`, error.message);
    }

    return;
  }

  try {
    const fileContent = fs.readFileSync(examplesFilePath, "utf-8");
    const examples = eval(fileContent + "\nexamples;");

    const allComponents = new Set();

    examples.forEach(({ Code }) => {
      const components = extractComponents(Code);
      components.forEach((component) => allComponents.add(component));
    });

    const importStatements = generateImports(Array.from(allComponents));

    // Prepare content for the new file
    const newFileContent = [
      "// Import Statements",
      ...importStatements,
      "// Examples",
      "export const examples = [",
      ...examples.map(({ name, Code }) => {
        return `  {\n    name: "${name}",\n    Code: (\n      ${Code}\n    )\n  },`;
      }),
      "]",
    ].join("\n");

    // Path to the new file
    const newFilePath = path.join(
      __dirname,
      "..",
      "components",
      "docs",
      "examples",
      componentName,
      "index.js"
    );

    // Ensure the output directory exists
    fs.mkdirSync(path.dirname(newFilePath), { recursive: true });

    // Write to the new file
    fs.writeFileSync(newFilePath, newFileContent, "utf-8");

    console.log(`✅ Processed ${componentName} successfully`);
  } catch (error) {
    console.error(`❌ Error processing ${componentName}:`, error.message);
  }
}

async function processAllComponents() {
  console.log("🚀 Starting component processing...\n");

  for (const component of components) {
    await processComponent(component);
  }
  // await processComponent("icon");

  console.log("\n✨ All components processed!");
}

processAllComponents();