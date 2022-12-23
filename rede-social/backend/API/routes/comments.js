const router = require('express').Router()
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const authMiddleware = require('../lib/auth')

router.use(authMiddleware)
router.route('/:postId/comments')

    /**
     * This function get comments of a post
     * @route GET /posts/{postId}/comments
     * @param {string} postId.path.required - user's id.
     * @group Comment - api
     * @returns {Array.<Comments>} 200 - An array of posts
     * @returns {Error} default - Unexpected error
     * @security JWT
     */

    .get(async (req, res) => {
        try {
            const comment = await Comment.find({ post: req.params.postId }).populate('profile')
            res.status(201).json(comment)
        } catch (err) {
            res.status(500)
        }
    })

    /**
     * This function post a comment into a post
     * @route POST /posts/{postId}/comments
     * @param {string} postId.path.required - post id.
     * @param {Comment.model} comment.body.required - the new point
     * @group Comment - api
     * @security JWT
     */

    .post(async (req, res) => {
        try {
            const newComment = new Comment({ ...req.body, profile: req.user.profile._id, post: req.params.postId })
            const savedComment = await newComment.save()
            const post = await Post.findById(req.params.postId)
            await post.updateOne({ $push: { comments: savedComment.id } })
            const rabbitComment = await req.publish('comment', [post.profile], post)
            res.status(200).json(savedComment)
        } catch (err) {
            res.status(500).json(err)
        }
    })

router.route('/:postId/comments/:id/')

    /**
     * This function to get a comment by id
     * @route GET /posts/{postId}/comments/{id}
     * @param {string} postId.path.required - user's id.
     * @param {string} id.path.required - user's id.
     * @group Comment - api
     * @returns {<Comments>} 200 - post
     * @security JWT
     */

    .get(async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id).populate('profile')
            if ([comment.post].toString() === req.params.postId) {
                res.status(201).json(comment)
            } else {
                res.status(403).json('Comment not found!')
            }
        } catch (err) {
            res.status(500)
        }
    })

    /**
     * This function to put a comment by id
     * @route PUT /posts/{postId}/comments/{id}
     * @param {Comment.model} comment.body.required - the new point
     * @param {string} postId.path.required - user's id.
     * @param {string} id.path.required - user's id.
     * @group Comment - api
     * @security JWT
     */

    .put(async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id)
            if ([comment.profile].toString() === [req.user.profile._id].toString() &&
                [comment.post].toString() === req.params.postId) {
                await comment.updateOne({ $set: req.body })
                res.status(200).json('Comment has been updated.')
            } else {
                res.status(403).json('You can only update your own comments!')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    })

    /**
     * This function to delete a comment by id
     * @route DELETE /posts/{postId}/comments/{id}
     * @param {string} postId.path.required - post id.
     * @param {string} id.path.required - comment id.
     * @group Comment - api
     * @security JWT
     */

    .delete(async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id)
            if ([comment.profile].toString() === [req.user.profile._id].toString()) {
                await comment.deleteOne()
                res.status(200).json('Comment has been deleted.')
            } else {
                res.status(403).json('You can only delete your own comments!');
            }
        } catch (err) {
            res.status(500).json(err)
        }
    })

router.route('/:postId/comments/:id/like')

    /**
     * This function to get a post by id
     * @route POST /posts/{postId}/comments/{id}/like
     * @param {string} postId.path.required post id.
     * @param {string} id.path.required - comment id
     * @group Comment - api
     * @security JWT
     */

    .post(async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id)
            if (!comment.likes.includes(req.user.profile._id)) {
                await comment.updateOne({ $push: { likes: req.user.profile._id } })
                const rabbitComment = await req.publish('comment-like', [comment.profile], comment)
                res.status(200).json('Comment has been liked.')
            } else {
                await comment.updateOne({ $pull: { likes: req.user.profile._id } });
                res.status(200).json('Comment has been disliked.')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    })

module.exports = router