const mongoose = require('mongoose')

const Schema = mongoose.Schema

const themeSchema = new Schema({
    theme: {
        type: String, 
        match: /^.{1,40}$/
    }, 
    description: {
        type: String, 
        match: /^.{1,300}$/
    }, 
    defaultStyle: {
        type: String,
        // default: {fontSize: "16px", googleFont: "href link"}
    },

    currentStyle: {
        type: Schema.Types.ObjectId,
        ref: 'Styleset'
    },

    // Do not change user, userName and userAvatar propeeties. They are required when using Google OAuth
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
        }
}, {
    timestamps: true
})

module.exports = mongoose.model('Theme', themeSchema)