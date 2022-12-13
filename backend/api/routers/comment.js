const createError = require('http-errors')
const express = require('express')
const router = express.Router()
const { Comment, Connection, Post } = require('../models')

router
  .param('postId', (req, res, next, id) => Promise.resolve()
    .then(() => {
      res.locals.post = { id }
      // console.log(`Request post id : ${id}`)
      next()
    })
    .catch(err => next(err))
  )
  .route('/:postId/comments')
  .all((req, res, next) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => {
      // console.log(`Request from: ${req.originalUrl}`)
      // console.log(`Request type: ${req.method}`)
      // console.log(`Request params: ${Object.keys(req.body)}`)
      next()
    })
    .catch((err) => next(err))
  )

/**
 * This function gets comments of a post
 * @route GET /posts/{postId}/comments
 * @param {string} postId.path.required - user's id
 * @group Comment - api
 * @returns {Array.<Comment>} 200 - An array of posts
 * @returns {Error} - default - Unexpected error
 * @security JWT
 */

  .get((req, res, next) => Promise.resolve()
    .then(() => Comment.find({ post: res.locals.post.id }).populate('post'))
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err))
  )

/**
 * This function post a comment into a Post
 * @route POST /posts/{postId}/comments
 * @param {string} postId.path.required - user's id
 * @group Comment - api
 * @returns {Array.<Comment>} 200 - An array of posts
 * @param {Comment.model} comment.body.required - the new point
 * @security JWT
 */

  .post((req, res, next) => Promise.resolve()
    .then(() => new Comment(Object.assign(req.body, { post: res.locals.post.id, user: req.user._id })).save())
    .then((comment) => Post.findById(comment.post)
      .then(post => Object.assign(post, { comments: [...post.comments, comment._id] }))
      .then(post => Post.findByIdAndUpdate(comment.post, post))
      .then(() => comment)
    )
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err))
  )

router
  .param('id', (req, res, next, id) => Promise.resolve()
    .then(() => Connection.then())
    .then(() => {
      // console.log(`Request from: ${req.params}`)
      // console.log(`Request type: ${req.method}`)
      // console.log(`Request id: ${id}`)
      next()
    })
    .catch((err) => next(err))
  )

  .route('/:postId/comments/:id')

/**
 * This function to get a comment by id
 * @route GET /posts/{postId}/comments/{id}
 * @param {string} postId.path.required - user's id
 * @param {string} id.path.required - user's id
 * @group Comment - api
 * @returns {<Comment>} 200 - post
 * @security JWT
 */

  .get((req, res, next) => Promise.resolve()
    .then(() => Comment.findById(req.params.id).populate('post'))
    .then((data) => data ? res.status(200).json(data) : next(createError(404)))
    .catch((err) => next(err))
  )

/**
 * This function to put a comment by id
 * @route PUT /posts/{postId}/comments/{id}
 * @param {Comment.model} comment.body.required - the new point
 * @param {string} postId.path.required - user's id
 * @param {string} id.path.required - user's id
 * @group Comment - api
 * @security JWT
 */

  .put((req, res, next) => Promise.resolve()
    .then(() => Comment.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }))
    .then((data) => res.status(203).json(data))
    .catch((err) => next(err))
  )

/**
 * This function to delete a comment by id
 * @route DELETE /posts/{postId}/comments/{id}
 * @param {string} postId.path.required - user's id
 * @param {string} id.path.required - user's id
 * @group Comment - api
 * @security JWT
 */

  .delete((req, res, next) => Promise.resolve()
    .then(() => Comment.deleteOne({ _id: req.params.id }))
    .then((data) => res.status(203).json(data))
    .catch((err) => next(err))
  )

module.exports = router
