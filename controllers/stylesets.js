const Theme = require('../models/theme')
const Styleset = require('../models/styleset')
const openAI = require('../config/openai')
const textRemainderForOpenAIRequest = `Respond with a JSON-like answer with keys fontColor, googleFontHref, googleFontFamily, mainBackgroundColor, menuBackgroundColor, tableHeaderColor and buttonColor on what font color rgba, public Google font href, Google font family in CSS format, background color rgba, navigation background color rgba, table header color rgba, and button color rgba could be used for this theme respectively. The suggested colors should have high contrast to each other, and menuBackgroundColor should have high color contrast from white.`;

module.exports = {
    create: createStyleset, 
    delete: deleteStyleset, 
    update: updateStyleset
}


async function createStyleset(req, res) {
    try {
        const themes = await Theme.findById(req.params.id)
        const openAIResponse = await openAI.sendRequest(`Theme: ${themes.theme}. Theme description: ${themes.description}. ${textRemainderForOpenAIRequest}`);
        const stylesetData = {...openAIResponse}
        // console.log(stylesetData)
        stylesetData.theme = req.params.id
        stylesetData.user = req.user._id;
        stylesetData.userName = req.user.name;
        stylesetData.userAvatar = req.user.avatar;
        await Styleset.create(stylesetData)
        res.redirect(`/themes/${req.params.id}`)
    } catch (err) {
        console.log(err)
    }
}

async function deleteStyleset(req, res) {
    try {
        await Styleset.deleteOne({_id: req.params.ssid})
        res.redirect(`/themes/${req.params.tid}`)
    } catch (err) {
        console.log(err);
    }
}

async function updateStyleset(req, res) {
    try {
        const themes = await Theme.findById(req.params.tid)
        const openAIResponse = await openAI.sendRequest(`Theme: ${themes.theme}. Theme description: ${themes.description}. ${textRemainderForOpenAIRequest}`)
        const stylesetData = {...openAIResponse}
        // stylesetData.theme = req.params.tid
        stylesetData.user = req.user._id;
        stylesetData.userName = req.user.name;
        stylesetData.userAvatar = req.user.avatar;
        // await Styleset.create(stylesetData)
        await Styleset.findOneAndUpdate({_id: req.params.ssid}, stylesetData)
        res.redirect(`/themes/${req.params.tid}`)
    } catch (err) {
        console.log(err)
    }
}