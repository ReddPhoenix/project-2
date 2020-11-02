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
        {
            tableName: 'Workorder',
            freezeTableName: true
        }
    );

    Workorder.associate = function (models) {
        Workorder.belongsTo(models.Customer, {
            foreignKey: { allowNull: false, name: 'custId' }
        });
        Workorder.belongsTo(models.Tech, {
            foreignKey: { allowNull: false, name: 'techId' }
        });
    };

    // Workorder.associate = function (models) {
    //     Workorder.belongsTo(models.Tech, {
    //         foreignKey: { allowNull: false, name: 'techId' }
    //     });
    // };

    return Workorder;
};