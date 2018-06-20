module.exports = function(sequelize, DataTypes) {
    var Messages = sequelize.define("Messages", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        phoneNum: {
            type: DataTypes.STRING  
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }); 
    return Messages; 
  };