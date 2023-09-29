const router = require("express").Router();
const listNewsController = require("../controllers/listNewsController");

router.get("/listNews", listNewsController.listNews);

module.exports = router;
