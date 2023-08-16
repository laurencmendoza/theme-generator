var express = require('express');
var router = express.Router();
const stylesetsCtrl = require('../controllers/stylesets');

// create a styleset
router.post('/themes/:id/stylesets', stylesetsCtrl.create);

// delete a styleset
router.delete('/themes/:tid/stylesets/:ssid', stylesetsCtrl.delete);

// update a styleset
router.put('/themes/:tid/stylesets/:ssid', stylesetsCtrl.update);


module.exports = router;