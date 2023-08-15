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
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Theme', themeSchema)