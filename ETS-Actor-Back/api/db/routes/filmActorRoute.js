const filmActor = require("../controller/filmActorController.js");

module.exports = (app) => {
  app.route("/filmActor").get(filmActor.getFilmActor);

  app.route("/filmActor/delete/:id").delete(filmActor.deleteFilmActor);

  app.route("/filmActor/delete").delete(filmActor.deleteAllFilmActor);
};
