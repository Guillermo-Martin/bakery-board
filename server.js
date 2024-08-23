// Express setup
const express = require("express");
const app = express();
const port = 3001;


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
