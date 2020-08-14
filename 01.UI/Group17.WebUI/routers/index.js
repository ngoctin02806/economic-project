const express = require('express');

const router = express.Router();

const homeRouter = require('./home.router');
const userRouter = require('./user.router');

router.use('/', homeRouter);
router.use('/', userRouter);

module.exports = router;
