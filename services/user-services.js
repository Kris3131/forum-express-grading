const bcrypt = require('bcryptjs')
const { User } = require('../models')

const userServices = {
  signUp: (req, callback) => {
    if (req.body.password !== req.body.passwordCheck) {
      throw new Error('Password 跟 Password Check 不一樣!')
    }
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) throw new Error('Email 已經註冊過了')
        return bcrypt.hash(req.body.password, 10)
      })
      .then(hash => {
        return User.create({
          name: req.body.name,
          email: req.body.email,
          password: hash
        })
      })
      .then(userSignUp => {
        console.log('userSignUp', userSignUp)
        callback(null, { user: userSignUp })
      })
      .catch(err => callback(err))
  }
}
module.exports = userServices
