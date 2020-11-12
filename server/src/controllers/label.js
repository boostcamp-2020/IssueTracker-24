const { Label } = require('../models');

const getAllLabels = async (req, res, next) => {
  const lables = await Label.findAll({});
  res.status(200).json(lables);
};

const deleteLabel = async (req, res, next) => {
  const { id } = req.params;
  try {
    const label = await Label.destroy({
      where: { id },
    });
    return res.status(201).json(label);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllLabels, deleteLabel };
