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
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Theme', themeSchema)