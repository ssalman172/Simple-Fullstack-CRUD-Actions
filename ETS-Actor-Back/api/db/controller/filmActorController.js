const FilmActor = require("../model/filmActorModel.js");

exports.getFilmActor = async (req, res) => {
  try {
    const result = await FilmActor.findAll({
      order: [["actor_id", "ASC"]],
    });
    if (!result) res.status(404).send("Data not found");

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteFilmActor = async (req, res) => {
  const id = req.params.id;

  try {
    await FilmActor.destroy({
      where: {
        actor_id: id,
      },
    });
    res.status(200).send("Data deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteAllFilmActor = async (req, res) => {
  try {
    await FilmActor.destroy({
      truncate: true,
    });
    res.status(200).send("All data deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
