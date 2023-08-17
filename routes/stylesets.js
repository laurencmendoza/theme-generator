var express = require('express');
var router = express.Router();
const stylesetsCtrl = require('../controllers/stylesets');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// create (generate) a styleset
router.post('/themes/:id/stylesets', ensureLoggedIn, stylesetsCtrl.create);

// delete a styleset
router.delete('/themes/:tid/stylesets/:ssid', ensureLoggedIn, stylesetsCtrl.delete);

// update a styleset
router.put('/themes/:tid/stylesets/:ssid', ensureLoggedIn, stylesetsCtrl.update);

module.exports = router;