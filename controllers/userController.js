// require User model
const { User } = require("./../models/userSchema");

function findUser(req, res){
  console.log("you're in the findUser function!");

  User.find()
    .then(user => {
      res.json(user);
      console.log(user, "line 9");
    })
    .catch(err => {
      console.log(err);
    });
};

// export function to use in api routes
module.exports = { findUser };

// Todos:
// 1.  have the function query the database for all users (temporarily)
// 2.  require the model to use
