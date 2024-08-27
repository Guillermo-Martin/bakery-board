// Express setup
// =============================================
const express = require("express");
const app = express();
const port = 3001;


// Mongoose setup
// =============================================
const mongoose = require("mongoose");
const database = "bakeryBoard";

// function to connect to database
async function connectToDatabase() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${database}`);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// connect to database
connectToDatabase()
  .then(console.log("success!"))
  .catch(err => console.log(err));


// Entrance into the API routes
// =============================================
const routes = require("./routes");


// Body parser middleware (allows us to get data from the body of the request)
// =============================================
app.use(express.urlencoded({ extended: true })); // <-- parses incoming data and makes it available on "req.body"
app.use(express.json()); // <-- allows us to submit raw JSON files


// API routes
// =============================================
// use the routes located in the "routes" folder
app.use(routes);

// Example route setup and how to get information from the url
// app.get('/example/:userId/books/:bookId', (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });


// Listener
// =============================================
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
