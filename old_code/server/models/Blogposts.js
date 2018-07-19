module.exports = function(sequelize, DataTypes) {
    var Blogposts = sequelize.define("Blogposts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }); 
    return Blogposts; 
  };