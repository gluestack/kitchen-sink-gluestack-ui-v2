const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const config = {
  gitUrl: "git@github.com:gluestack/gluestack-ui.git",
  components: [
    {
      name: "accordion",
      path: "example/storybook-nativewind/src/components/Accordion/index.nw.stories.mdx",
    },
    {
      name: "actionsheet",
      path: "example/storybook-nativewind/src/components/Actionsheet/index.nw.stories.mdx",
    },
    {
      name: "alert",
      path: "example/storybook-nativewind/src/components/Alert/index.nw.stories.mdx",
    },
    {
      name: "alert-dialog",
      path: "example/storybook-nativewind/src/components/AlertDialog/index.nw.stories.mdx",
    },
    {
      name: "avatar",
      path: "example/storybook-nativewind/src/components/Avatar/index.nw.stories.mdx",
    },
    {
      name: "badge",
      path: "example/storybook-nativewind/src/components/Badge/index.nw.stories.mdx",
    },
    {
      name: "bottomsheet",
      path: "example/storybook-nativewind/src/components/Bottomsheet/index.nw.stories.mdx",
    },
    {
      name: "box",
      path: "example/storybook-nativewind/src/components/Box/index.nw.stories.mdx",
    },
    {
      name: "button",
      path: "example/storybook-nativewind/src/components/Button/index.nw.stories.mdx",
    },
    {
      name: "card",
      path: "example/storybook-nativewind/src/components/Card/index.nw.stories.mdx",
    },
    {
      name: "center",
      path: "example/storybook-nativewind/src/components/Center/index.nw.stories.mdx",
    },
    {
      name: "checkbox",
      path: "example/storybook-nativewind/src/components/Checkbox/index.nw.stories.mdx",
    },
    {
      name: "divider",
      path: "example/storybook-nativewind/src/components/Divider/index.nw.stories.mdx",
    },
    {
      name: "fab",
      path: "example/storybook-nativewind/src/components/Fab/index.nw.stories.mdx",
    },
    {
      name: "form-control",
      path: "example/storybook-nativewind/src/components/FormControl/index.nw.stories.mdx",
    },
    {
      name: "grid",
      path: "example/storybook-nativewind/src/components/Grid/index.nw.stories.mdx",
    },
    {
      name: "heading",
      path: "example/storybook-nativewind/src/components/Heading/index.nw.stories.mdx",
    },
    {
      name: "hstack",
      path: "example/storybook-nativewind/src/components/HStack/index.nw.stories.mdx",
    },
    {
      name: "icon",
      path: "example/storybook-nativewind/src/components/Icon/index.nw.stories.mdx",
    },
    {
      name: "image",
      path: "example/storybook-nativewind/src/components/Image/index.nw.stories.mdx",
    },
    {
      name: "image-viewer",
      path: "example/storybook-nativewind/src/components/ImageViewer/index.nw.stories.mdx",
    },
    {
      name: "input",
      path: "example/storybook-nativewind/src/components/Input/index.nw.stories.mdx",
    },
    {
      name: "link",
      path: "example/storybook-nativewind/src/components/Link/index.nw.stories.mdx",
    },
    {
      name: "menu",
      path: "example/storybook-nativewind/src/components/Menu/index.nw.stories.mdx",
    },
    {
      name: "modal",
      path: "example/storybook-nativewind/src/components/Modal/index.nw.stories.mdx",
    },
    {
      name: "pin-input",
      path: "example/storybook-nativewind/src/components/PinInput/index.nw.stories.mdx",
    },
    {
      name: "popover",
      path: "example/storybook-nativewind/src/components/Popover/index.nw.stories.mdx",
    },
    {
      name: "portal",
      path: "example/storybook-nativewind/src/components/Portal/index.nw.stories.mdx",
    },
    {
      name: "pressable",
      path: "example/storybook-nativewind/src/components/Pressable/index.nw.stories.mdx",
    },
    {
      name: "progress",
      path: "example/storybook-nativewind/src/components/Progress/index.nw.stories.mdx",
    },
    {
      name: "radio",
      path: "example/storybook-nativewind/src/components/Radio/index.nw.stories.mdx",
    },
    {
      name: "select",
      path: "example/storybook-nativewind/src/components/Select/index.nw.stories.mdx",
    },
    {
      name: "skeleton",
      path: "example/storybook-nativewind/src/components/Skeleton/index.nw.stories.mdx",
    },
    {
      name: "slider",
      path: "example/storybook-nativewind/src/components/Slider/index.nw.stories.mdx",
    },
    {
      name: "spinner",
      path: "example/storybook-nativewind/src/components/Spinner/index.nw.stories.mdx",
    },
    {
      name: "switch",
      path: "example/storybook-nativewind/src/components/Switch/index.nw.stories.mdx",
    },
    {
      name: "table",
      path: "example/storybook-nativewind/src/components/Table/index.nw.stories.mdx",
    },
    {
      name: "text",
      path: "example/storybook-nativewind/src/components/Text/index.nw.stories.mdx",
    },
    {
      name: "textarea",
      path: "example/storybook-nativewind/src/components/Textarea/index.nw.stories.mdx",
    },
    {
      name: "toast",
      path: "example/storybook-nativewind/src/components/Toast/index.nw.stories.mdx",
    },
    {
      name: "tooltip",
      path: "example/storybook-nativewind/src/components/Tooltip/index.nw.stories.mdx",
    },
    {
      name: "vstack",
      path: "example/storybook-nativewind/src/components/VStack/index.nw.stories.mdx",
    },
  ],
  branchName: "main",
  destinationDir: path.join(__dirname, "../components/docs/examples/"),
  cloneDir: path.join(__dirname, "../gluestack-ui"),
};

async function cloneOrUpdateRepo() {
  const repoPath = config.cloneDir;

  try {
    if (fs.existsSync(repoPath)) {
      console.log("Removing existing repository directory...");
      fs.removeSync(repoPath);

      if (fs.existsSync(repoPath)) {
        console.error(
          "Failed to remove existing repository directory. Please check permissions."
        );
        process.exit(1);
      }
    }

    console.log("Cloning repository...");
    execSync(
      `git clone ${config.gitUrl} --branch ${config.branchName} ${repoPath}`,
      {
        stdio: "inherit",
      }
    );
  } catch (error) {
    console.error("Error during cloning:", error);
    process.exit(1);
  }

  return repoPath;
}

async function extractCodeFromExamplesSection(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const startIndex = fileContent.indexOf("### Examples");

    if (startIndex === -1) {
      console.error(`### Examples section not found in the file: ${filePath}`);
      return "";
    }

    return fileContent.slice(startIndex).trim();
  } catch (error) {
    console.error(`Error reading or processing the file: ${filePath}`, error);
    return "";
  }
}

async function saveExtractedContentToFile(componentName, extractedContent) {
  const destPath = path.join(config.destinationDir, componentName);
  const outputFilePath = path.join(destPath, "extracted_code.mdx");

  if (extractedContent) {
    fs.ensureDirSync(destPath);
    fs.writeFileSync(outputFilePath, extractedContent);
    console.log(
      `Extracted content for "${componentName}" saved to ${outputFilePath}`
    );
  } else {
    console.error(`No content to save for "${componentName}".`);
  }
}

async function processComponents(repoPath) {
  for (const { name, path: componentPath } of config.components) {
    console.log(`Processing component: ${name}`);
    const filePath = path.join(repoPath, componentPath);

    const extractedCode = await extractCodeFromExamplesSection(filePath);
    await saveExtractedContentToFile(name, extractedCode);
  }
}

async function main() {
  try {
    const repoPath = await cloneOrUpdateRepo();
    await processComponents(repoPath);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
