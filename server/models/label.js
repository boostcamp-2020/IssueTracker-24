module.exports = (sequelize, DataTypes) => {
  const label = sequelize.define(
    'label',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      color: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: 'label',
      timestamps: false,
      underscored: true,
    },
  );

  return label;
};
