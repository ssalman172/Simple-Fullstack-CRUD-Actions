const { DataTypes } = require("sequelize");
const db = require("../db.js");

const Actor = db.define(
  "actor",
  {
    actor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKeyConstraint: false,
      autoIncrement: true,
      onDelete: "CASCADE",
      hooks: true,
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

const FilmActor = db.define("film_actor", {
  actor_id: {
    type: DataTypes.INTEGER,
    foreignKeyConstraint: false,
    hooks: true,
  },
});

FilmActor.belongsTo(Actor, {
  foreignKeyConstraint: false,
  foreignKey: "film_actor_actor_id_fkey",
  onDelete: "CASCADE",
});

Actor.sync().then(() => console.log("Table created!"));

module.exports = Actor;
