const User = require('./src/TagEngine/Classes/User')

const user = User.createUser({
  id: 0,
  username: 'bendevnull'
})

console.log(user)
console.log(user.toJSON())
console.log(user.toString())
console.log(user.toString(true))
