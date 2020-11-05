// Creates our Workorder Model
module.exports = function (sequelize, DataTypes) {
    const Workorder = sequelize.define('Workorder', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        appt_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        products: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // makes the timestamps work properly
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
    },
        // Don't create time stamp, don't pluralize the table name
        {
            tableName: 'Workorder',
            freezeTableName: true
        }
    );

    // Joins the Workorder table with the Customer and Tech tables, forces the foreign key
    Workorder.associate = function (models) {
        Workorder.belongsTo(models.Customer, {
            foreignKey: { allowNull: false, name: 'custId' }
        });
        Workorder.belongsTo(models.Tech, {
            foreignKey: { name: 'techId' }
        });
    };

    return Workorder;
};