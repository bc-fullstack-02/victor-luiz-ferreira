const { Router } = require('express')

const {
  PostController,
  CommentController
} = require('../controllers/postController')

const postRoutes = Router()

postRoutes
  .route('/posts')
  .get(PostController.list)
  .post(PostController.add)
postRoutes
  .route('/posts/new')
  .get(PostController.new)
postRoutes
  .route('/posts/:id')
  .get(PostController.show)
  .put(PostController.save)
  .delete(PostController.delete)
postRoutes
  .route('/posts/:id/edit')
  .get(PostController.edit)

const commentRoutes = Router()

commentRoutes
  .param('postId', CommentController.beforeAllById)
  .route('/:postId/comments')
  .get(CommentController.list)
  .post(CommentController.add)
commentRoutes
  .route('/:postId/comments/new')
  .get(CommentController.new)
commentRoutes
  .route('/:postId/comments/:id')
  .get(CommentController.show)
  .put(CommentController.save)
  .delete(CommentController.delete)
commentRoutes
  .route('/:postId/comments/:id/edit')
  .get(CommentController.edit)

postRoutes.use('/posts', commentRoutes)

module.exports = postRoutes
