const path = require('path');
const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const exhbs = require('express-handlebars');
const exHbsSection = require('express-handlebars-sections');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

require('./facebook.strategy');
require('./local.strategy');

const app = express();

const router = require('../routers/index');
const slugify = require('../utils/slugify');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = () =>
  new Promise((resolve, reject) => {
    try {
      app.engine(
        '.hbs',
        exhbs({
          extname: '.hbs',
          defaultLayout: path.resolve(__dirname, '../views/shared/layout.hbs'),
          partialsDir: path.resolve(__dirname, '../views/partials'),
          helpers: {
            section: exHbsSection(),
            slugify,
          },
        })
      );

      // serve image files
      app.use(
        '/images',
        express.static(path.resolve(__dirname, '../public/images'))
      );

      // serve assets files
      app.use(
        '/static/assets',
        express.static(path.resolve(__dirname, '../public/assets'))
      );

      app.set('view engine', '.hbs');

      app.set('views', path.resolve(__dirname, '../views'));

      // app.use(session({ secret: 'cats' }));

      app.use(flash());

      // parse application/x-www-form-urlencoded
      app.use(bodyParser.urlencoded({ extended: false }));
      // parse application/json
      app.use(bodyParser.json());

      app.use(cookieParser());

      app.use(
        session({
          cookie: { httpOnly: true, maxAge: 30 * 40 * 60 * 60 * 1000 },
          secret: 'S3cret',
          resave: false,
          saveUninitialized: false,
        })
      );

      app.use((req, res, next) => {
        req.session.currentPath = req.originalUrl;
        next();
      });

      app.use(passport.initialize());

      app.use(passport.session());

      app.use(morgan('dev'));

      // router
      app.use('/', router);

      // catch 404 error
      app.use((req, res, next) => {
        const err = new Error('Resource is not exist');
        err.status = 404;

        next(err);
      });

      // eslint-disable-next-line
      app.use((error, req, res, next) => {
        if (isProduction)
          return res.status(error.status || 500).json({
            code: error.status || 500,
            message: error.message,
          });

        return res.status(error.status || 500).json({
          code: error.status || 500,
          message: error.message,
        });
      });

      app.listen(config.get('PORT'), () => {
        // eslint-disable-next-line
        console.log(
          `[SERVER] Server is listening on port ${config.get('PORT')}`
        );
      });

      resolve(app);
    } catch (error) {
      reject(error);
    }
  });
