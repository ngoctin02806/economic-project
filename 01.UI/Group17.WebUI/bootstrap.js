const expressConfig = require('./core/express.core');

process.on('uncaughtException', e => {
  console.log(e); // eslint-disable-line
});

process.on('unhandledRejection', e => {
  console.log(e); // eslint-disable-line
});

const startServer = async () => {
  await expressConfig();
};

startServer();
