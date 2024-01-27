const express = require("express");
const fileUploadController = require("../controllers/photosController.js");
const photoRouter = express.Router();
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "uploads/" }); // temporarily saves files to 'uploads' folder

photoRouter.post(
  "/upload",
  upload.single("image"),
  fileUploadController.uploadFile
);

photoRouter.get("/files/:filename", fileUploadController.getFile);

module.exports = photoRouter;
