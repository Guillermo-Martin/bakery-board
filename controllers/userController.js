// require User model
const { User } = require("./../models/userSchema");

// find all users function
function findUser(req, res){
  console.log("you're in the findUser function!");

  // query the database for all user, then send the data to the front end
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

