"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(50),
      },
    },
    {}
  );
  Tag.associate = function (models) {
    // associations can be defined here
  };
  return Tag;
};
