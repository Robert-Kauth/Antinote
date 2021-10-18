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
        type: DataTypes.STRING(255),
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
    },
    {}
  );
  Note.associate = function (models) {
    Note.belongsTo(models.User, { foreignKey: "userId" });
    Note.belongsTo(models.Notebook, {
      foreignKey: "notebookId",
      hooks: true,
    });
  };
  return Note;
};
