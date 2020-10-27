module.exports = (sequelize, DataTypes) =>{
    const milestone = sequelize.define(
        'milestone',
        {
           id: {
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true,
               autoIncrement: true,
           },
           title:{
               type: DataTypes.STRING(200),
               allowNull: false,
           },
           description: {
               type: DataTypes.STRING(1500),
               allowNull: false,
           },
           due_date:{
               type:'TIMESTAMP',
               defaultValue: sequelize.literal('current_timestamp'),
               allowNull:false,
           },
           state:{
               type:DataTypes.STRING(200),
               allowNull:false,
           } 
        },
        {
           tableName: 'milestone',
           timestamps: false,
           underscored: true,
         },
    );
    return milestone;
   };