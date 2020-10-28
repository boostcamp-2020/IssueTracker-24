module.exports = (sequelize, DataTypes) => {
  const issueLabel = sequelize.define(
    'issue_label',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      tableName: 'issue_label',
      timestamps: false,
      underscored: true,
    },
  );

  issueLabel.associate = (models) => {
    issueLabel.belongsTo(models.Issue, {
      foreignKey: 'issue_id',
      onDelete: 'no action',
      onUpdate: 'no action',
    });
    issueLabel.belongsTo(models.Label, {
      foreignKey: 'label_id',
      onDelete: 'no action',
      onUpdate: 'no action',
    });
  };

  return issueLabel;
};
