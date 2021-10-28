const { DataTypes } = require("sequelize");
const db = require("../db.js");

const FilmActor = db.define(
  "film_actor",
  {
    actor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

FilmActor.sync().then(() => console.log("Table created!"));

module.exports = FilmActor;
