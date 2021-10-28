const actor = require("../controller/actorController.js");

module.exports = (app) => {
  app.route("/actor").get(actor.getActors).post(actor.addActor);

  app.route("/actor/update/:id").put(actor.updateActor);

  app.route("/actor/delete/:id").delete(actor.deleteActor);

  app.route("/actor/delete").delete(actor.deleteAllActor);
};
