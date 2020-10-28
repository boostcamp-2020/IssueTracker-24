module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    'comment',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      tableName: 'comment',
      timestamps: true,
      underscored: true,
    },
  );
  comment.associate = (models) => {
    comment.belongsTo(models.User, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    comment.belongsTo(models.Issue, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    comment.hasMany(models.CommentImage, {
      as: 'commentImages',
    });
  };
  return comment;
};
