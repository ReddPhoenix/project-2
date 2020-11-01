const bcrypt = require('bcryptjs');
// const passport = require('passport');
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        // The email cannot be null, and must be a proper email before creation
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    });
    // Creating a custom method for our User model.
    User.prototype.validPassword = function (password) {
        // return bcrypt.compareSync(password, this.password);
        return password === this.password;
    };
    User.addHook('beforeCreate', function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};