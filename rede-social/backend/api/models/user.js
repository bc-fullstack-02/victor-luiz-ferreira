const mongoose = require('../database')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true,
    unique: true
  },
  password: {
    type: 'string',
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 12)
  this.password = hash

  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
