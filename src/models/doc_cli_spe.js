'use strict';
const {
    Model, DataTypes,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DocCLiSpe extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    DocCLiSpe.init({
        doctorId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,
        specialtyId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'DocCLiSpe',
    });
    return DocCLiSpe;
};