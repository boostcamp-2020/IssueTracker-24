module.exports = (sequelize, DataTypes) => {
  const commentImage = sequelize.define(
    'commentImage',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      image_url: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      tableName: 'comment_image',
      timestamps: false,
      underscored: true,
    },
  );
  commentImage.associate = (models) => {
    commentImage.belongsTo(models.Comment, {
      targetKey: 'id',
      onDelete: 'no action',
      onUpdate: 'no action',
    });
  };
  return commentImage;
};
