const router = require("express").Router();

const sessionRouter = require("./session");
const usersRouter = require("./users");
const notebooksRouter = require("./notebooks");
const notesRouter = require("./notes");

// Api Routers
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/notebooks", notebooksRouter);
router.use("/notes", notesRouter);

/*****************************Routes*****************************/

module.exports = router;
