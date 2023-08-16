const mongoose = require('mongoose')
const defaultTheme = JSON.stringify({
    fontColor: "rgb(0,0,0)", 
    googleFont: "'Roboto Mono', monospace", 
    backgroundColor: "rgb(240,248,255)",
    menuBackgroundColor: "rgb(221,160,221)",
    tableHeaderColor: "rgb(184,201,65)",
    applyButtonColor: "rgb(255,165,0)",
    generateButtonColor: "rgb(0,128,0)"
})

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