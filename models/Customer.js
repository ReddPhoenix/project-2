// creating our Customer Model
module.exports = function (sequelize, DataTypes) {
    const Customer = sequelize.define('Customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },

    // Don't create time stamp, don't pluralize the table name
    {
        timestamps: false,
        tableName: 'Customer',
        freezeTableName: true
    });

    // Joins the Customer table with the Workorder table
    Customer.associate = function (models) {
        Customer.hasMany(models.Workorder, { foreignKey: 'custId' });
    };

    return Customer;
};