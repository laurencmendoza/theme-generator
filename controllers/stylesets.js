const Theme = require('../models/theme')
const Styleset = require('../models/styleset')
const openAI = require('../config/openai')

module.exports = {
    create: createStyleset
}


async function createStyleset(req, res) {
    try {
        const openAIResponse = await openAI.sendRequest(`Theme: ${themes.theme}. Theme description: ${themes.description} Respond with a JSON-like answer with keys fontColor, googleFontFamily, and mainBackgroundColor on what font color rgba, public Google font href, and background color rgba could be used for this theme respectively`)
        const stylesetData = {...openAIResponse}
        stylesetData.theme = req.params.id
        await Styleset.create(stylesetData)
        res.redirect(`/themes/${req.params.id}`)
    } catch (err) {
        console.log(err)
    }
}