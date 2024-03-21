const fs = require("fs").promises;
const path = require("path");
const FILES_DIR = path.join(__dirname, "../../data");

const createFile = async (fileName, content) => {
  const filePath = path.join(FILES_DIR, `${fileName}.json`);
  await fs.writeFile(filePath, JSON.stringify(content, null, 2));

  return "File created successfully.";
};

const listFiles = async () => {
  const files = await fs.readdir(FILES_DIR);

  return files.map((file) => file);
};

const retrieveFile = async (fileName) => {
  const filePath = path.join(FILES_DIR, `${fileName}.json`);
  const fileContent = await fs.readFile(filePath, "utf8");

  return JSON.parse(fileContent);
};

const updateFile = async (fileName, content) => {
  const filePath = path.join(FILES_DIR, `${fileName}.json`);
  await fs.writeFile(filePath, JSON.stringify(content, null, 2));

  return "File updated successfully.";
};

const deleteFile = async (fileName) => {
  const filePath = path.join(FILES_DIR, `${fileName}.json`);
  await fs.unlink(filePath);

  return "File deleted successfully.";
};

module.exports = {
  createFile,
  listFiles,
  retrieveFile,
  updateFile,
  deleteFile,
};
