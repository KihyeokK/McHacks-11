const fs = require("fs");
const { GridFSBucket } = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const base64Img = require("base64-img");
const { download } = require("ajax-request");
const { buffer } = require("stream/consumers");

dotenv.config({ path: path.resolve(__dirname, "../.env") });
const MONGODB_URI = process.env.MONGODB_URI;

let gfs;
const conn = mongoose.createConnection(process.env.MONGODB_URI);
conn.once("open", () => {
    const db = conn.db;
    gfs = new GridFSBucket(db, {
        bucketName: "uploads"
    });
});

exports.uploadFile = (req, res) => {
    const stream = gfs.openUploadStream(req.file.originalname);
    fs.createReadStream(req.file.path).pipe(stream);

    stream.on("error", (err) => {
        console.log(err);
        return res.status(500).json();
    });
    stream.on("finish", async () => {
        let returnedFile = await gfs.find({ _id: stream.id });
        returnedFile.toArray().then((files, err) => {
            if (!files || files.length === 0) {
                return res.status(404).json({ message: "File not found" });
            }
            const file = files[0];
            return res.status(200).json({ file: file });
        });
    });
};

exports.getFile = async (req, res) => {
    let returnedFile = await gfs.find({ filename: req.params.filename });
    returnedFile.toArray().then((files, err) => {
        if (!files || files.length === 0) {
            return res.status(404).json({ message: "File not found" });
        }
        const buf = [];
        const downloadStream = gfs.openDownloadStreamByName(
            req.params.filename
        );
        downloadStream.on("data", (chunk) => {
            buf.push(chunk);
        });
        downloadStream.on("end", () => {
            const buffer = Buffer.concat(buf);
            const file = buffer.toString("base64");
            const imgSrcString = `data:image/png;base64,${file}`;
            return res.status(200).json({ file: file });
        });
        downloadStream.on("error", (err) => {
            console.log(err);
            return res.status(500).json();
        });
    });
};
