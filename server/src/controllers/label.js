const { Label } = require('../models');

const getAllLabels = async (req, res, next) => {
  const lables = await Label.findAll({});
  res.status(200).json(lables);
};

const createLabel = async (req, res, next) => {
  const { title, description, color } = { ...req.body };
  try {
    const label = await Label.create({
      title,
      description,
      color,
    });
    res.status(200).json(label);
  } catch (err) {
    next(err);
  }
};
module.exports = { getAllLabels, createLabel };
