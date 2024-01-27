const fs = require("fs");
const { GridFSBucket } = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const MONGODB_URI = process.env.MONGODB_URI;

let gfs;
const conn = mongoose.createConnection(process.env.MONGODB_URI);
conn.once("open", () => {
  const db = conn.db;
  gfs = new GridFSBucket(db, {
    bucketName: "uploads",
  });
});

exports.uploadFile = (req, res) => {
  const stream = gfs.openUploadStream(req.file.originalname);
  fs.createReadStream(req.file.path).pipe(stream);

  stream.on("error", (err) => {
    console.log(err);
    return res.status(500).json({ message: "Error uploading file" });
  });
  stream.on("finish", () => {
    return res.status(201).json({ message: "File uploaded successfully" });
  });
};

exports.getFile = (req, res) => {
  console.log(req.params.filename);
  gfs.find({ filename: req.params.filename }).toArray((err, files) => {
    console.log(files);
    if (err) {
      return res.status(500).json({ message: "Error retrieving file" });
    } else if (!files || files.length === 0) {
      return res.status(404).json({ message: "File not found" });
    }
    const readstream = gfs.openDownloadStreamByName(req.params.filename);
    readstream.pipe(res);
  });
};
