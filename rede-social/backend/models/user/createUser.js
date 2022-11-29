const { Schema, model } = require('mongoose')
const Redact = require('./redact')

const createUserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'nome de usuário obrigatorio'],
    minLength: 2,
    validate: { // bonus track
        validator: (val) => Redact
          .count({ term: val })
          .then(count => count === 0),
        message: 'esse nome de usuário já existe'
      }
  },
  email: {
    type: String,
    required: [true, 'email obrigatorio'],
    minLength: 12,
    validate: { // bonus track
        validator: (val) => Redact
          .count({ term: val })
          .then(count => count === 0),
        message: 'esse não psrece ser um email válido'
      }
  },
  password: {
    type: String,
    required: [true, 'senha obrigatoria'],
    minLength: 8,
    validate: { // bonus track
        validator: (val) => Redact
          .count({ term: val })
          .then(count => count === 0),
        message: 'a senha precisa conter no mínimo 8 caracteres'
      }
  }
}, { timestamps: true })

module.exports = model('createUser', createUserSchema)
