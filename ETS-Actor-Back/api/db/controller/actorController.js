const Actor = require("../model/actorModel.js");

exports.getActors = async (req, res) => {
  try {
    const result = await Actor.findAll({
      order: [["actor_id", "ASC"]],
    });
    if (!result) res.status(404).send("Data not found");

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addActor = async (req, res) => {
  const { first_name, last_name, last_update } = req.body;

  try {
    const resData = await Actor.create({
      first_name,
      last_name,
      last_update,
    });
    res.status(201).json({ msg: "Data Created", response: resData });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateActor = async (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, last_update } = req.body;

  try {
    await Actor.update(
      {
        first_name,
        last_name,
        last_update,
      },
      {
        where: {
          actor_id: id,
        },
      }
    );
    res.status(200).send("Data updated");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteActor = async (req, res) => {
  const id = req.params.id;

  try {
    await Actor.destroy({
      where: {
        actor_id: id,
      },
    });
    res.status(200).send("Data deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteAllActor = async (req, res) => {
  try {
    await Actor.destroy({
      where: {},
    });
    res.status(200).send("All data deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
