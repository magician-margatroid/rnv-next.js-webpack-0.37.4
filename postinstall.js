const { readFile, writeFile } = require('fs/promises');
const { join } = require('path');

const improveExpoConfigImport = async () => {
  const filePaths = [
    'node_modules/babel-preset-expo/build/expo-router-plugin.js',
    'node_modules/babel-preset-expo/build/expo-inline-manifest-plugin.js'
  ];
  for (const filePath of filePaths) {
    try {
      const fullPath = join(__dirname, filePath);
      const content = await readFile(fullPath, "utf8");
      const improvedContent = content.replace(/([^@])(expo\/config)/g, "$1@$2");
      await writeFile(fullPath, improvedContent, 'utf8');
      console.log(`${filePath} improved`);
    } catch (error) {
      console.log(`error while improving ${filePath}`, error);
    }
  }
};

improveExpoConfigImport();