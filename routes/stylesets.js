var express = require('express');
var router = express.Router();
const stylesetsCtrl = require('../controllers/stylesets');

router.put('/stylesets/:id', stylesetsCtrl.apply);

router.post('/themes/:id/stylesets', stylesetsCtrl.create);


module.exports = router;