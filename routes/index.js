// using express.Router (to create modular route handlers)
const express = require("express");
const router = express.Router();

// get functions from user controller
// const { getAllUsers } = require("./../controllers/userController");

// 1. require mongoose
const mongoose = require("mongoose");

// 2. create the schema (the blue print of how the data should look in the database)
const kittySchema = new mongoose.Schema({
  name: String
});

// 3. compile the schema into a model (used to construct documents in the database) - name it and use the schema
const Kitten = mongoose.model('Kitten', kittySchema);

// 4. create a new kitten
// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

// 5. add it to the database
// silence.save();

// 6. find all the kittens in the database
// const kittens = Kitten.find();
// console.log(kittens);




// when the API request is made, it's "/"
router.get("/api", (req, res) => {
  res.send("in api route");
  console.log("in api route");
});

// API request for "/auth" (for user authentication)
router.get("/api/auth", (req, res) => {
  // res.send(["red", "blue", "green"]);
  console.log("you the the /auth/api route");

  // getAllUsers();
  // function to query the database
  const kittens = Kitten.find()
    .then(kitten => {
      res.json(kitten);
      console.log(kitten, "line 44 ~~~~~~~~~~")
    })
  console.log(kittens, "line 42~~~~~~~");
});

module.exports = router;


// steps to querying the database
// 1. require mongoose
// 2. create the schema (the blue print of how the data should look in the database)
// 3. compile the schema into a model (used to construct documents in the database) - name it and use the schema