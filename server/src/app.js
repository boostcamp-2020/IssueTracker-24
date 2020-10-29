const express = require('express');
const config = require('./config');

const startServer = async () => {
  const app = express();

  await require('./loaders')(app);

  app.listen(config.port, () => console.log(config.port, '번 포트에서 대기중'));
};

startServer();
