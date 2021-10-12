"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      notebookId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Notebooks" },
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
    },
    {}
  );
  Note.associate = function (models) {
    // associations can be defined here
  };
  return Note;
};
