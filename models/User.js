const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
 name: {
  type: String,
  maxlenth: 50
 },
 email: {
  type: String,
  trim: true,
  unique: 1
 },
 password: {
  type: String,
  minlength: 4
 },
 lastname: {
  type: String,
  maxlenth: 50
 },
 role: {
  type: Number,
  default: 0
 },
 image: String,
 token: {
  type: String,
 },
 tokenExp: {
  type: Number
 }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }