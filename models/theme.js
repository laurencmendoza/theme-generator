const mongoose = require('mongoose')
const defaultTheme = JSON.stringify({fontColor: "rgb(0,0,0)", googleFont: "'Bricolage Grotesque', sans-serif", backgroundColor: "rgb(255,0,0)"})

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
        default: defaultTheme 
    },
    currentStyle: {
        type: Schema.Types.ObjectId,
        ref: 'Styleset'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Theme', themeSchema)