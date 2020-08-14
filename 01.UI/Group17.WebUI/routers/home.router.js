const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home.controller');

router.use((req, res, next) => {
  res.locals.user = req.user;

  return next();
});

router.get('/', homeController.home);
router.get('/dang-nhap', homeController.renderLogin);

module.exports = router;
