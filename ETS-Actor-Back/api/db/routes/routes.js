const actorRoute = require("./actorRoute.js");
const filmActorRoute = require("./filmActorRoute.js");

module.exports = (app) => {
  actorRoute(app);
  filmActorRoute(app);
};
