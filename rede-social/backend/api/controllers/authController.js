const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
const authConfig = require('../config/auth')

const router = express.Router()

function generateToken (params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 3600 * 24 * 60 * 60
  })
}

// cadastramento de usuarios
router.post('/register', async (req, res) => {
  const { email } = req.body

  // verifica se o email já existe no banco de dados
  try {
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: 'usuário já existe' })
    }
    const user = await User.create(req.body)

    user.password = undefined

    return res.send({
      user,
      token: generateToken({ id: user.id })
    })
  } catch (err) {
    return res.status(400).send({ error: 'o cadastro falhou' })
  }
})

// autenticação para login dos usuários
router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email }.select('+password'))

  if (!user) {
    return res.status(400).send({ error: 'usuário não encontrado' })
  }

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: 'senha incorreta' })
  }

  user.password = undefined

  // hash MD5 gerado em https://www.md5hashgenerator.com/

  res.send({
    user,
    token: generateToken({ id: user.id })
  })
})

module.exports = app => app.use('/auth', router)
