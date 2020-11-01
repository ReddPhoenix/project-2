module.exports = function (sequelize, DataTypes) {
    const Workorder = sequelize.define('workorder', {
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

    // Workorder.associate = function (models) {
    //     Workorder.belongsTo(models.Customer, {
    //         foreignKey: { allowNull: false }
    //     });
    // };

    return Workorder;
};