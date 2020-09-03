const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category.controller');

router.use((req, res, next) => {
  res.locals.user = req.user;

  return next();
});

router.get('/category/:id&page=:page', categoryController.category);
router.get('/search/page=:page', categoryController.search);
module.exports = router;
