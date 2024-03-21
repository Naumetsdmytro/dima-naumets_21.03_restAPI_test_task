const express = require("express");
const { fileController } = require("../controllers");
const { validateBody } = require("../middlewares");
const { fileSchema } = require("../request-schemas");

const router = express.Router();

router.post(
  "/files",
  validateBody(fileSchema.fileCreateSchema),
  fileController.createFile
);

router.get("/files", fileController.listFiles);

router.get("/files/:name", fileController.retrieveFile);

router.put(
  "/files/:name",
  validateBody(fileSchema.fileUpdateSchema),
  fileController.updateFile
);

router.delete("/files/:name", fileController.deleteFile);

module.exports = router;
