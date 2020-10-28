module.exports = (sequelize, DataTypes) => {
  const issueImage = sequelize.define(
    'issueImage',
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
      tableName: 'issue_image',
      timestamps: false,
      underscored: true,
    },
  );
  issueImage.associate = (models) => {
    issueImage.belongsTo(models.Issue, {
      foreignKey: 'issue_id',
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  };
  return issueImage;
};
