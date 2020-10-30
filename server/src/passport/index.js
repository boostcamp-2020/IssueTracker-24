const github = require('./github-strategy');
const jwt = require('./jwt-strategy');

module.exports = () => {
  github();
  jwt();
};
