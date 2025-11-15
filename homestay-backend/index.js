
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

const galleryPath = path.join(__dirname, "data/gallery.json");

// Fetch all photos
app.get("/api/gallery", (req, res) => {
  if (fs.existsSync(galleryPath)) {
    const gallery = JSON.parse(fs.readFileSync(galleryPath, "utf8"));
    res.json(gallery);
  } else {
    res.json([]);
  }
});

// Upload new photo
app.post("/api/upload", upload.single("photo"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");
  const { caption, category } = req.body;

  let gallery = [];
  if (fs.existsSync(galleryPath)) gallery = JSON.parse(fs.readFileSync(galleryPath, "utf8"));

  const newPhoto = { src: `/uploads/${req.file.filename}`, caption, category };
  gallery.push(newPhoto);
  fs.writeFileSync(galleryPath, JSON.stringify(gallery, null, 2));

  res.json({ message: "Photo uploaded successfully", photo: newPhoto });
});

// Edit photo
app.put("/api/photo/:index", (req, res) => {
  const { index } = req.params;
  const { caption, category } = req.body;
  if (!fs.existsSync(galleryPath)) return res.status(404).send("Gallery not found");

  const gallery = JSON.parse(fs.readFileSync(galleryPath, "utf8"));
  if (!gallery[index]) return res.status(404).send("Photo not found");

  gallery[index].caption = caption || gallery[index].caption;
  gallery[index].category = category || gallery[index].category;
  fs.writeFileSync(galleryPath, JSON.stringify(gallery, null, 2));

  res.json({ message: "Photo updated", photo: gallery[index] });
});

// Delete photo
app.delete("/api/photo/:index", (req, res) => {
  const { index } = req.params;
  if (!fs.existsSync(galleryPath)) return res.status(404).send("Gallery not found");

  const gallery = JSON.parse(fs.readFileSync(galleryPath, "utf8"));
  const removed = gallery.splice(index, 1);
  fs.writeFileSync(galleryPath, JSON.stringify(gallery, null, 2));

  res.json({ message: "Photo deleted", photo: removed[0] });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
