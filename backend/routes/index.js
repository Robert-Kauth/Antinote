const express = require("express");
const router = express.Router();

/****************************Routers*****************************/
const apiRouter = require("./api");

router.use("/api", apiRouter);

/*****************************Routes*****************************/

module.exports = router;
