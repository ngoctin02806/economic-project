const express = require('express');
const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/dang-nhap', userController.renderLogin);

router.post(
  '/dang-nhap',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/dang-nhap',
    failureFlash: true,
    passReqToCallback: true,
  })
);

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

router.get('/dang-xuat', userController.logout);

module.exports = router;
