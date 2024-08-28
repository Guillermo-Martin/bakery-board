// // require model to use
// const { Kitten } = require("./../models/kittySchema");

// // function to get all kittens
// function getAllKittens(req, res){
//   console.log("getAllKittens function");

//   Kitten.find()
//     .then(kitten => {
//       res.json(kitten);
//       console.log(kitten, "line 44 ~~~~~~~~~~")
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// // export function to use in api routes
// module.exports = { getAllKittens };