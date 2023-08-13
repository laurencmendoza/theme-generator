var express = require('express');
var router = express.Router();
const themesCtrl = require('../controllers/themes')

/* GET themes listing. */
router.get('/', themesCtrl.index);

// GET new page
router.get('/new', themesCtrl.new)

// GET themes detail page
// router.get('/:id', themesCtrl.show)

// POST a new theme to index
// router.post('/', themesCtrl.create)

module.exports = router;
