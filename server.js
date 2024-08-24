// Express setup
const express = require("express");
const app = express();
const port = 3001;



// Body parser middleware (allows us to get data from the body of the request)
// =============================================
app.use(express.urlencoded({ extended: true })); // <-- parses incoming data and makes it available on "req.body"
app.use(express.json()); // <-- allows us to submit raw JSON files


// API routes
// =============================================
app.get('/', (req, res) => {
  res.send("Hello world");
});


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
