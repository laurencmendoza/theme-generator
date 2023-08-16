const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stylesetSchema = new Schema({
    theme: {
        type: Schema.Types.ObjectId, 
        ref: 'Theme'
    }, 
    fontColor: {
        type: String
    }, 
    googleFontHref: {
        type: String
    },
    googleFontFamily: {
        type: String
    }, 
    mainBackgroundColor: {
        type: String
    },
    // Do not change user, userName and userAvatar propeeties. They are required when using Google OAuth
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
} )

module.exports = mongoose.model('Styleset', stylesetSchema)