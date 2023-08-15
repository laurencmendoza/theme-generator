var express = require('express');
var router = express.Router();
const stylesetsCtrl = require('../controllers/stylesets');

router.put('/stylesets/:id', stylesetsCtrl.apply);

router.post('/themes/:id/stylesets', stylesetsCtrl.create);


// delete a styleset
router.delete('/themes/:tid/stylesets/:ssid', stylesetsCtrl.delete);

module.exports = router;