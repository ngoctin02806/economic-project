const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category.controller');
const { categoryMiddleware } = require('../middlewares/category.middleware');

router.use((req, res, next) => {
  res.locals.user = req.user;

  return next();
});

router.get(
  '/category/:id&page=:page',
  categoryMiddleware,
  categoryController.category
);

module.exports = router;
