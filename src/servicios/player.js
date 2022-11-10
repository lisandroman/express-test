const { MOCKE_PLAYER } = require("../models/players");

const getAllPlayers = () => {
  return MOCKE_PLAYER;
};

module.exports = { getAllPlayers };
