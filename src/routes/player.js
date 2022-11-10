const express = require("express");
const router = express.Router();

const { getPlayers, getPlayerDetail, deletePlayer } = require("../controllers/player");
const { checkSession } = require("../middlewares/origin");

router.get("/defenders", getPlayers);
router.get("/:id", getPlayerDetail);
router.delete("/:id", checkSession, deletePlayer);

module.exports = router;
