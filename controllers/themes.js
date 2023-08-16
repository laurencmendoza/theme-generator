const Theme = require('../models/theme')
const Styleset = require('../models/styleset')
const openAI = require('../config/openai')

module.exports = {
    index,
    new: newTheme, 
    create, 
    delete: deleteTheme, 
    show
}

function index(req, res) {
    // res.render('themes/index', {title: 'Theme List', errorMsg: ''})
    Theme.find({})
    .then(results=>res.render('themes/index', {title: "Theme List", themes: results}))
    .catch(err=>res.send(err))
}

function newTheme(req, res) {
    res.render('themes/new', {title: 'New Theme', errorMsg: ''})
}

async function create(req, res) {
    const themeData = {...req.body}
    themeData.user = req.user._id;
    themeData.userName = req.user.name;
    themeData.userAvatar = req.user.avatar;
    try {
        const createdTheme = await Theme.create(themeData)
        res.redirect("/themes/");
    } catch (err) {
        res.render("themes/new", {errorMsg: err.message});
    }
}

async function deleteTheme(req, res) {
    try {
        await Theme.deleteOne({_id: req.params.id});
        res.redirect('/themes');
    } catch (err) {
        console.log(err, err);
      }
}

async function show(req, res) {
    try {
        const themes = await Theme.findById(req.params.id).populate("currentStyle")
        const stylesets = await Styleset.find({theme: themes._id})
        const appliedStyleset = await Styleset.find({})
        res.render('themes/show', {
            title: `${themes.theme}`, 
            themes, 
            stylesets, 
            appliedStyleset
        })
    } catch(err) {
        res.render('themes/show', {errorMsg: err.message})
    }
    // res.send(openAIResponse)
}

// fontColor: {
//     type: String
// }, 
// googleFontFamily: {
//     type: String
// }, 
// mainBackgroundColor: {
//     type: String
// }