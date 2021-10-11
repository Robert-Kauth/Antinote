"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define(
    "Notebook",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {}
  );
  Notebook.associate = function (models) {
    // associations can be defined here
  };
  return Notebook;
};
