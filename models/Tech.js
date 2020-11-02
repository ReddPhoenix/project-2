module.exports = function (sequelize, DataTypes) {
    const Tech = sequelize.define('Tech', {
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
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // createdAt: {
        //     type: 'TIMESTAMP',
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        //     allowNull: false
        // },
        // updatedAt: {
        //     type: 'TIMESTAMP',
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        //     allowNull: false
        // }
    },

        {
            timestamps: false,
            tableName: 'Tech',
            freezeTableName: true
        });

    Tech.associate = function (models) {
        Tech.hasMany(models.Workorder, { foreignKey: 'techId' });
    };
    return Tech;
};