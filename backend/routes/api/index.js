const router = require("express").Router();

const sessionRouter = require("./session");
const usersRouter = require("./users");
const notebooksRouter = require("./notebooks");

// Api Routers
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/notebooks", notebooksRouter);

/*****************************Routes*****************************/

module.exports = router;
