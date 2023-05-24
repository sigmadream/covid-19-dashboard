const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('GlobalStat', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        cc: {
            type: DataTypes.CHAR(2),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        confirmed: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        death: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        released: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        tested: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        negative: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'GlobalStat',
        indexes: [
            {
                name: 'ccWithDate',
                unique: true,
                fields: [{ name: 'cc' }, { name: 'date' }]
            }
        ],
        timestamps: false,
    })
}