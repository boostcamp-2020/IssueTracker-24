module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      profile_image: {
        type: DataTypes.STRING(200),
      },
      user_id: {
        type: DataTypes.STRING(100),
      },
      password: {
        type: DataTypes.STRING(100),
      },
      sns_id: {
        type: DataTypes.STRING(200),
      },
      provider: {
        type: DataTypes.STRING(100),
      },
    },
    {
      tableName: 'user',
      timestamps: false,
      underscored: true,
    },
  );
  return user;
};
