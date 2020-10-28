module.exports = (sequelize, DataTypes) =>{
    const issueImage = sequelize.define(
       'issueImage',{
           id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
         },
           image_url: {
               type:DataTypes.STRING(200),
               allowNull:false,
           }
       },
       {
           tableName: 'issue_image',
           timestamps:true,
           underscored:true,
       },
    );
    return issueImage;
}