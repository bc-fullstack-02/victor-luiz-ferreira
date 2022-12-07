// const createError = require('http-errors')
const Post = require('../models/post')

exports.add = async (req, res, next) => {
  try {
    const addPost = await Post.create(req.body)
    const { id } = await addPost.body
    res.status(200).json(addPost).send({ addPost: 'post adicionado com sucesso!' })
    return res.redirect(`/v1/posts/${id}`)
  } catch (err) {
    next(err)
  }
}

exports.list = async (req, res, next) => {
  try {
    const list = await Post.find().populate({ path: 'comments', select: 'description' })
    res.status(200).json(list)
  } catch (err) {
    next(err)
  }
}

exports.edit = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json('Post atualizado com sucesso')
      res.render('posts/edit')
    } else {
      res.status(403).json('você só pode atualizar o seu próprio post')
    }
  } catch (err) {
    next(err)
  }
}

exports.delete = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    if (post.userId === req.body.userId) {
      await post.deleteOne()
      res.status(200).json('Post deletado com sucesso')
      res.redirect('/v1/posts')
    } else {
      res.status(403).json('você só pode deletar o seu próprio post')
    }
  } catch (err) {
    next(err)
  }
}

exports.show = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate({ path: 'comments', select: 'description' })
    res.status(200).json(post)
  } catch (err) {
    next(err)
  }
}

exports.save = (req, res, next) => Promise.resolve()
  .then(() => Post.findByIdAndUpdate(req.params.id, req.body.post, {
    runValidators: true
  }))
  .then((data) => {
    res.message('save post success!')
    res.redirect(`/v1/posts/${req.params.id}`)
  })
  .catch(err => next(err))

exports.new = (req, res, next) => Promise.resolve()
  .then((data) => {
    res.render('posts/new', { post: new Post(res.locals.post) })
  })
  .catch(err => next(err))
