const { Schema, model } = require('mongoose')
const Redact = require('./redact')

const loginSchema = new Schema({
  user: {
    type: String,
    required: [true, 'usuário obrigatorio'],
    minLength: [2, 'usuário precisa possuir no mínimo 2 caracteres']
  },
  password: {
    type: String,
    required: [true, 'senha obrigatoria'],
    validate: { // bonus track
      validator: (val) => Redact
        .count({ term: val })
        .then(count => count === 0),
      message: 'senha incorreta'
    }
  },
  profileAccess: [{
    type: Schema.Types.ObjectId,
    ref: 'createUser'
  }]
}, { timestamps: true })

module.exports = model('Login', loginSchema)
