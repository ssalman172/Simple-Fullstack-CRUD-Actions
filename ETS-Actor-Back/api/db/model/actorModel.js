const { DataTypes } = require("sequelize");
const db = require("../db.js");

const Actor = db.define(
  "actor",
  {
    actor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Actor.sync().then(() => console.log("Table created!"));

module.exports = Actor;
