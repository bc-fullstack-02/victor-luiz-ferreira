const router = require('express').Router()
const Profile = require('../models/Profile')
const authMiddleware = require('../lib/auth')

router.use(authMiddleware)
router.route('/')

    /**
     * This function list the profiles
     * @route GET /profiles
     * @group Profile - api
     * @returns {Profile} 200 - Anarray of user info
     * @returns {Error} default - Unexpected error
     * @security JWT
     */

    .get(async (req, res) => {
        try {
            const profile = await Profile.find()
            res.status(201).json(profile)
        } catch (err) {
            res.status(500)
        }
    })

    .put(async (req, res) => {
        try {
            const profile = await Profile.findById(req.user.profile)
            await profile.updateOne({ $set: req.body })
            res.status(200).json('Profile has been updated.')
        } catch (err) {
            res.status(500).json(err)
        }
    })

router.route('/search')

    /**
     * This function to get a post by id
     * @route GET /profiles/search?q={q}
     * @param {string} q.query.required - profile id.
     * @group Profile - api
     * @returns {<Profile>} 200 - profile
     * @security JWT
     */

    .get(async (req, res) => {
        try {
            const profile = Profile.find(
                { $text: { $search: `${req.query.q}` } },
                { score: { $meta: 'textScore' } }).sort({ score: { $meta: 'textScore' } })
            res.status(200).json(profile)
        } catch (err) {
            res.status(500).json(err)
        }
    })

router.route('/:id')

    /**
     * This function to get a post by id
     * @route GET /profiles/{id}
     * @param {string} id.path.required - profile id.
     * @group Profile - api
     * @returns {<Profile>} 200 - profile
     * @security JWT
     */

    .get(async (req, res) => {
        try {
            const profile = await Profile.findById(req.params.id)
            const { user, ...other } = profile._doc
            res.status(200).json(other)
        } catch (err) {
            res.status(500).json('Profile not found!')
        }
    })

router.route('/:id/follow')

    /**
     * This function to get a post by id
     * @route POST /profiles/{id}/follow
     * @param {string} id.path.required - user's id.
     * @group Profile - api
     * @security JWT
     */

    .post(async (req, res) => {
        if ([req.user.profile._id].toString() !== req.params.id) {
            try {
                const profile = await Profile.findById(req.params.id)
                const currentProfile = await Profile.findById(req.user.profile._id)
                if (!profile.followers.includes(req.user.profile._id)) {
                    await profile.updateOne({ $push: { followers: req.user.profile._id } })
                    await currentProfile.updateOne({ $push: { following: req.params.id } })
                    res.status(200).json('Followed profile.')
                } else if (profile.followers.includes(req.user.profile._id)) {
                    await profile.updateOne({ $pull: { followers: req.user.profile._id } })
                    await currentProfile.updateOne({ $pull: { following: req.params.id } })
                    res.status(200).json('Unfollowed profile')
                }
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json('You cannot follow yourself!')
        }
    })

module.exports = router