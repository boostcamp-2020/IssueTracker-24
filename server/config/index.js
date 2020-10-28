const dotenv = require('dotenv');

const environment = process.env.NODE_ENV || 'development';
dotenv.config({
  path: `${__dirname}/../${environment}.env`,
});

console.log(environment);

module.exports = {
  port: parseInt(process.env.PORT, 10),
  db: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DB_DIALECT,
  },
};
