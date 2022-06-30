module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('Users', {
        fname: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        lname: {
        type: DataTypes.STRING,
        allowNull: true,
        },
        username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    }, 
    
    {
        tableName: 'Users',
        timestamps: true,
        underscored: true,
        paranoid: true,
        // classMethods: {
        // associate: (models) => {
        //     Users.hasMany(models.Posts, {
        //     foreignKey: 'userId',
        //     as: 'posts',
        //     });
        // }
        // }
    });
    
    return Users;
    }