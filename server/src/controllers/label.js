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

const patchLabel = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, color } = req.body;
  const patchedLabel = {};
  if (title) patchedLabel.title = title;
  if (description) patchedLabel.description = description;
  if (color) patchedLabel.color = color;

  await Label.update(patchedLabel, { where: { id } });
  const label = await Label.findByPk(id, { attributes: ['id', 'title', 'description', 'color'] });
  return res.status(200).json(label);
};

module.exports = { getAllLabels, createLabel, patchLabel };
