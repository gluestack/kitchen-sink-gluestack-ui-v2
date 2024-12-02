const path = require("path");
const { execSync } = require("child_process");

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
  const transformerFilePath = path.join(__dirname, ".", "transformer.js");

  execSync(`npx jscodeshift -t ${transformerFilePath} ${examplesFilePath} --componentName ${componentName}`, {
    stdio: "inherit",
  });
}

async function processAllComponents() {
  console.log("🚀 Starting component processing...\n");

  for (const component of components) {
    await processComponent(component);
  }
  // await processComponent("actionsheet");

  console.log("\n✨ All components processed!");
}
processAllComponents();
