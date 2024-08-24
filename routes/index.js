// using express.Router (to create modular route handlers)
const express = require("express");
const router = express.Router();

// when the API request is made, it's "/"
router.get("/", (req, res) => {
  res.send("in routes");
});

// API request for "/about"
router.get("/about", (req, res) => {
  res.send("you hit the /about route");
});

module.exports = router;