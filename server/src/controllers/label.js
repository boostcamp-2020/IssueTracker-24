const { Label } = require('../models');

const getAllLabels = async (req, res, next) => {
  const lables = await Label.findAll({});
  res.status(200).json(lables);
};
module.exports = { getAllLabels };
