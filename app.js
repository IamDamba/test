// ||||||||||||||||||||||||| Dependances |||||||||||||||||||||||||||

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const path = require("path");

const port = process.env.PORT || 3001;

// ||||||||||||||||||||||||| MiddleWare |||||||||||||||||||||||||||
app.use(cors());
app.use(express.static(path.join(__dirname, "front/dist")));

// ||||||||||||||||||||||||| Routes |||||||||||||||||||||||||||

app.get("/api/truc", (req, res) => {
  res.status(200).json({ text: "machin " });
});

// ||||||||||||||||||||||||| Listen |||||||||||||||||||||||||||

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
