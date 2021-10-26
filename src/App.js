const User = require('./TagEngine/Classes/User');

var user = User.createUser(0, "bendevnull");
console.log(user);
console.log(user.toJSON());
console.log(user.toString());
console.log(user.toString(true));