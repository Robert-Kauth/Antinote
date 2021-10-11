const router = require("express").Router();

const notebooksRouter = require("./notebooks");

router.use("/notebooks", notebooksRouter);

module.exports = router;
