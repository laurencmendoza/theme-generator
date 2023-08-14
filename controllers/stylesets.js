const Theme = require('../models/theme')
const Styleset = require('../models/styleset')
const openAI = require('../config/openai')

module.exports = {
    create: createStyleset, 
    apply: applyStyleset
}


async function createStyleset(req, res) {
    try {
        const themes = await Theme.findById(req.params.id)
        const openAIResponse = await openAI.sendRequest(`Theme: ${themes.theme}. Theme description: ${themes.description} Respond with a JSON-like answer with keys fontColor, googleFontHref, googleFontFamily, and mainBackgroundColor on what font color rgba, public Google font href, Google font family in CSS format, and background color rgba could be used for this theme respectively`)
        const stylesetData = {...openAIResponse}
        console.log(stylesetData)
        stylesetData.theme = req.params.id
        await Styleset.create(stylesetData)
        res.redirect(`/themes/${req.params.id}`)
    } catch (err) {
        console.log(err)
    }
}

async function applyStyleset(req,res) {
    try {
        const appliedStyleset = req.body
        const styleset = await Styleset.findById(appliedStyleset.styleset)
        const themes = await Theme.findById(styleset.theme)
        const stylesets = await Styleset.find({theme: styleset.theme})
        console.log
        // res.send(appliedStyleset)
        res.render(`themes/show`, {
            title: `Theme Details`, 
            appliedStyleset, 
            themes, 
            styleset, 
            stylesets
        })
    } catch (err) {
        console.log(err)
    }
}