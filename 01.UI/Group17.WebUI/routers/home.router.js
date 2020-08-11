const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home.controller');

router.get('/', homeController.home);
router.get('/dang-nhap', homeController.renderLogin);

module.exports = router;
