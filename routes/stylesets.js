var express = require('express');
var router = express.Router();
const stylesetsCtrl = require('../controllers/stylesets');

router.post('/themes/:id/stylesets', stylesetsCtrl.create);