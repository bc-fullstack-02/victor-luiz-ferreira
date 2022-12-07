const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'titulo obrigatorio'],
    minLength: [2, 'titulo no minimo 2']
  },
  description: {
    type: String,
    required: [true, 'descricao obrigatoria']
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, { timestamps: true })

const Post = model('Post', postSchema)

module.exports = Post
