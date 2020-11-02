const github = require('./github-strategy');
const jwt = require('./jwt-strategy');

module.exports = () => {
  // TODO: local-strategy 추가
  github();
  jwt();
};
