// 1. require mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

// 2. create the schema (the blueprint of how the data should look in the database)
const userSchema = new Schema({
  userName: String,
  password: String
});

 // 3. compile the schema into a model (used to construct documents in the database)
 // - 1st argument: name of model; 2nd argument: blueprint to use
const User = mongoose.model("User", userSchema);

// 4. export model to use in its controller
module.exports = { User };
