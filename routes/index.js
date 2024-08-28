// using express.Router (to create modular route handlers)
const express = require("express");
const router = express.Router();

// get functions from user controller
const { getAllKittens } = require("./../controllers/kittenController");

// when the API request is made, it's "/"
router.get("/api", (req, res) => {
  res.send("in api route");
  console.log("in api route");
});

// API request for "/auth" (for user authentication)
router.get("/api/auth", getAllKittens);

module.exports = router;
