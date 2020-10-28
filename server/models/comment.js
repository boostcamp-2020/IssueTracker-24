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
      // issue_id: {
      //   type: DataTypes.INTEGER,
      // },
      // user_id: {
      //   type: DataTypes.INTEGER,
      // },
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
      targetKey: 'id',
      onDelete: 'no action',
      onUpdate: 'no action',
    });
    comment.belongsTo(models.Issue, {
      targetKey: 'id',
      onDelete: 'no action',
      onUpdate: 'no action',
    });
    comment.hasMany(models.CommentImage, {
      sourceKey: 'id',
      onDelete: 'no action',
      onUpdate: 'no action',
    });
  };
  return comment;
};
