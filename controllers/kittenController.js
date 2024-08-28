// 1. require mongoose
const mongoose = require("mongoose");

// 2. create the schema (the blue print of how the data should look in the database)
const kittySchema = new mongoose.Schema({
  name: String
});

// 3. compile the schema into a model (used to construct documents in the database) - name it and use the schema
const Kitten = mongoose.model('Kitten', kittySchema);



function getAllKittens(req, res){
  console.log("getAllKittens function");

  const kittens = Kitten.find()
  .then(kitten => {
    res.json(kitten);
    console.log(kitten, "line 44 ~~~~~~~~~~")
  })
  
  console.log(kittens, "line 42~~~~~~~");
}

module.exports = { getAllKittens };