var express = require('express');
var router = express.Router();
const themesCtrl = require('../controllers/themes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET themes listing. */
router.get('/', themesCtrl.index);

// GET new page
router.get('/new', ensureLoggedIn, themesCtrl.new);

// GET themes detail page
router.get('/:id', themesCtrl.show);

// POST a new theme to index
router.post('/', ensureLoggedIn, themesCtrl.create);

// DELETE a theme
router.delete('/:id', ensureLoggedIn, themesCtrl.delete);

// UPDATE a theme with currentStyle property
router.put('/:id', themesCtrl.update);

module.exports = router;
