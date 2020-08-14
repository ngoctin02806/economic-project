const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { checkPasswordOfUser } = require('../../../02.Business/userBus');

passport.use(
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const result = await checkPasswordOfUser(username, password);

      if (!result.status && result.code === 'not-exist') {
        return done(null, false, req.flash('message', result.message));
      }

      if (!result.status && result.code === 'not-match-password') {
        return done(null, false, req.flash('message', result.message));
      }

      return done(null, result.user.value.dataValues);
    }
  )
);
