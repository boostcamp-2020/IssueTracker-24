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
      profileImage: {
        type: DataTypes.STRING(200),
      },
      userId: {
        type: DataTypes.STRING(100),
      },
      password: {
        type: DataTypes.STRING(100),
      },
      snsId: {
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
  user.associate = (models) => {
    user.belongsToMany(models.Issue, {
      as: 'issues',
      through: 'issue_user',
      foreignKey: 'user_id',
    });
  };
  return user;
};
