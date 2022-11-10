const { getAllPlayers } = require("../servicios/player");

const getPlayers = (req, res) => {
  res.send({ data: getAllPlayers() });
};
const getPlayerDetail = (req, res) => {
  res.send({ data: "Details" });
};
const updatePlayerDetails = (req, res) => {
  res.send({ data: "Update" });
};
const createPlayer = (req, res) => {
  res.send({ data: "Create" });
};
const deletePlayer = (req, res) => {
  res.send({ data: "Delete" });
};

// get, update, create, delete

module.exports = {
  getPlayers,
  getPlayerDetail,
  updatePlayerDetails,
  createPlayer,
  deletePlayer,
};
