const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home.controller');
const { categoryMiddleware } = require('../middlewares/category.middleware');

router.use((req, res, next) => {
  res.locals.user = req.user;

  return next();
});

router.get('/', categoryMiddleware, homeController.home);

module.exports = router;
