const Theme = require('../models/theme')
const Styleset = require('../models/styleset')
const openAI = require('../config/openai')

module.exports = {
    index,
    new: newTheme, 
    create, 
    delete: deleteTheme, 
    show, 
    update: updateCurrentStyleset
}


async function index(req, res) {
    try {
        const themes = await Theme.find({});
        res.render('themes/index', {title: "Theme List", themes})
        
    } catch (err) {
        res.render("themes/index", {errorMsg: err.message});
    }

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
}

// adds applied style sent from show.ejs form to currentStyle property of the theme
async function updateCurrentStyleset(req, res) {
    try {
        const currentStylesetId = req.body.stylesetId
        const themes = await Theme.findById(req.params.id)
        themes.currentStyle = currentStylesetId
        await themes.save()
        res.redirect(`/themes/${req.params.id}`)
    } catch(err) {
        res.render('themes/show', {errorMsg: err.message})
    }
}
