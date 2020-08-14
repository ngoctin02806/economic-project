const config = require('config');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const {
  createNewUser,
  getUserByIdentify,
} = require('../../../02.Business/userBus');

passport.serializeUser((user, done) => {
  done(null, user.makhachhang);
});

passport.deserializeUser(async (id, done) => {
  const user = await getUserByIdentify(id);
  done(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: config.get('FACEBOOK_ID'),
      clientSecret: config.get('FACEBOOK_SECRET'),
      callbackURL: 'http://localhost:8000/auth/facebook/callback',
      profileFields: [
        'id',
        'displayName',
        'name',
        'email',
        'gender',
        'picture.type(large)',
      ],
    },
    async (accessToken, refreshToken, profile, done) => {
      const data = {
        email: profile.emails[0].value,
        tenkhachhang: profile.displayName,
        loaixacthuc: 'facebook',
        matkhau: profile.id,
        avatar: profile.photos[0].value,
        vaitro: 0,
      };

      const user = await createNewUser(data);

      done(null, user);
    }
  )
);
