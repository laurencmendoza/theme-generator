const Theme = require('../models/theme')
const Styleset = require('../models/styleset')

module.exports = {
    index,
    new: newTheme
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