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
  user.associate = (models) => {
    user.belongsToMany(models.Issue, {
      as: 'issues',
      through: 'issue_user',
      foreignKey: 'user_id',
      timestamps: false,
    });
    user.hasMany(models.Comment, {
      as: 'comments',
    });
  };
  return user;
};
