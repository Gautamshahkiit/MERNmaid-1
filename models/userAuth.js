const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Name: String,
  Password: String,
  Email: String,
  googleId: String,
  githubId: String
})

module.exports = userSchema