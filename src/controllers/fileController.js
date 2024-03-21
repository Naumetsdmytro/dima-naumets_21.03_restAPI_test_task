const { fileService } = require("../services");
const { ctrlWrapper } = require("../helpers");

const createFile = async (req, res) => {
  const { name, content } = req.body;
  const response = await fileService.createFile(name, content);
  res.status(201).send(response);
};

const listFiles = async (req, res) => {
  const files = await fileService.listFiles();
  res.json(files);
};

const retrieveFile = async (req, res) => {
  const content = await fileService.retrieveFile(req.params.name);
  res.json(content);
};

const updateFile = async (req, res) => {
  const response = await fileService.updateFile(req.params.name, req.body);
  res.send(response);
};

const deleteFile = async (req, res) => {
  const response = await fileService.deleteFile(req.params.name);
  res.send(response);
};

module.exports = {
  createFile: ctrlWrapper(createFile),
  listFiles: ctrlWrapper(listFiles),
  retrieveFile: ctrlWrapper(retrieveFile),
  updateFile: ctrlWrapper(updateFile),
  deleteFile: ctrlWrapper(deleteFile),
};
