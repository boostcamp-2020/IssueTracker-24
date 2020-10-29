module.exports = (sequelize, DataTypes) => {
  const issue = sequelize.define(
    'issue',
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
      content: {
        type: DataTypes.STRING(1500),
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING(100),
      },
    },
    {
      tableName: 'issue',
      timestamps: true,
      underscored: true,
    },
  );
  issue.associate = (models) => {
    issue.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'no action',
      onUpdate: 'no action',
    });
    issue.hasMany(models.Comment, {
      as: 'comments',
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    issue.belongsToMany(models.User, {
      as: 'users',
      through: 'issue_user',
      foreignKey: 'issue_id',
      timestamps: false,
    });
    issue.hasMany(models.IssueImage, {
      as: 'issueImages',
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    issue.belongsTo(models.Milestone, {
      foreignKey: 'milestone_id',
      onDelete: 'no action',
      onUpdate: 'no action',
    });
    issue.belongsToMany(models.Label, {
      as: 'labels',
      through: 'issue_label',
      timestamps: false,
    });
  };
  return issue;
};
