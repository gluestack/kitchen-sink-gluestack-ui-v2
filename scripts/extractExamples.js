const fs = require("fs");
const path = require("path");

// Function to extract example name and code from <CodePreview> components
function extractExamplesCode(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Regular expression to match and remove block comments wrapped with {/* */}
    const commentBlockRegex = /{\s*\/\*[\s\S]*?\*\/\s*}/g;

    // Remove commented blocks from the file content and {...props} spread
    const uncommentedContent = fileContent.replace(commentBlockRegex, "").replace("{...props}", "");

    // Regular expression to match the example name (headers)
    const exampleNameRegex = /####\s*(.*)/g;

    // Regular expression to match the code inside metaData prop (code: `...`)
    const codeRegex = /metaData\s*=\s*{[^}]*\s*code\s*:\s*`([^`]+)`/g;

    const examples = [];
    let nameMatch, codeMatch;

    while ((nameMatch = exampleNameRegex.exec(uncommentedContent)) !== null) {
      // Capture the example name (e.g., Button with Loading State)
      const exampleName = nameMatch[1].trim();

      // Capture the code for this example
      if ((codeMatch = codeRegex.exec(uncommentedContent)) !== null) {
        let code = codeMatch[1].trim();

        // Clean up the code format and remove {" "} and unnecessary spaces
        code = code.replace(/\s*{"\s*"\s*}\s*/g, ""); // Removes {" "} artifacts
        code = code.replace(/\s+/g, " "); // Replaces multiple spaces with a single space
        code = code.replace(/>\s+/g, ">").replace(/\s+</g, "<"); // Removes spaces around JSX tags

        // Push the example name and code into the examples array
        examples.push({
          name: exampleName,
          Code: `${code}`,
        });
      }
    }

    return examples;
  } catch (error) {
    console.error("Error reading or processing the file:", error);
    return [];
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

async function processComponent(componentName) {
  const examplesFilePath = path.join(
    __dirname,
    "..",
    "components",
    "docs",
    "examples",
    componentName,
    "extracted_code.mdx"
  );

  // Skip if examples file doesn't exist
  if (!fs.existsSync(examplesFilePath)) {
    console.log(`No examples file found for ${componentName}, skipping...`);
    return;
  }
  const extractedFilePath = path.join(
    __dirname,
    "..",
    "components",
    "docs",
    "examples",
    componentName,
    "extracted_code.mdx"
  );

  // Extracted output should be saved in the same directory as the extracted file
  const outputFilePath = path.join(
    path.dirname(extractedFilePath),
    "examples.js"
  );

  // Define the header content for the final .js file
  const fileHeader = `export const examples = [
`;

  // Extract the examples and code and write to .js file
  const examples = extractExamplesCode(extractedFilePath);

  if (examples.length > 0) {
    // Combine header, examples, and footer into the final file content
    const fileContent =
      fileHeader +
      examples
        .map(
          (example) => `
    {
      name: "${example.name}",
      Code: ${example.Code}
    }`
        )
        .join(",\n") +
      "\n];";

    // Write the file content to output.js in the same directory as the extracted file
    fs.writeFileSync(outputFilePath, fileContent, "utf-8");
    console.log(`Extracted examples saved to: ${outputFilePath}`);
  } else {
    console.log("No examples found in the <CodePreview> components.");
  }
}

async function processAllComponents() {
  console.log("🚀 Starting component processing...\n");

  // for (const component of components) {
  //   await processComponent(component);
  // }
  await processComponent("skeleton");

  console.log("\n✨ All components processed!");
}

processAllComponents();
