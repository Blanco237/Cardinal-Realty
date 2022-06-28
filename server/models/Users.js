module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('Users', {
        // id: {
        // type: DataTypes.INTEGER,
        // primaryKey: true,
        // autoIncrement: true,
        // allowNull: false,
        // },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
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
        createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        },
        updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        }
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