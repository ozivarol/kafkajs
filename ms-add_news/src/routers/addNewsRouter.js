const router = require("express").Router();
const addNewsController = require("../controllers/addNewsController");

router.post("/createNews", addNewsController.createNews);

module.exports = router;
