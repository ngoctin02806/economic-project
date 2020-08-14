const express = require('express');
const passport = require('passport');

const router = express.Router();

const homeController = require('../controllers/home.controller');

router.get('/dang-nhap', homeController.renderLogin);

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

module.exports = router;
