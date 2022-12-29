const { Schema, model } = require('mongoose')

/**
 * @typedef Profile
 * @property {string} _id
 * @property {string} name.required
 * @property {user} user.required - user
 * @property {Array.<Profile>} following - following profiles
 */

const profileSchema = new Schema({
    name: {
        type: String,
        // required: true,
        // minLength: 2
    },
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    image: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String,
        minLength: 2
    },
})
profileSchema.index({ name: 'text' })
module.exports = model('Profile', profileSchema)