"use strict";
module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define(
    "Animal",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      photo: DataTypes.STRING
    },
    {}
  );
  Animal.associate = function(models) {
    // associations can be defined here
  };
  return Animal;
};
