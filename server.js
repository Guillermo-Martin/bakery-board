// Express setup
const express = require("express");
const app = express();
const port = 3001;

// API routes
// =============================================
app.get('/', (req, res) => {
  res.send("Hello world");
});

// Listener
// =============================================
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
