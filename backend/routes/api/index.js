const router = require("express").Router();

const sessionRouter = require("./session");
const usersRouter = require("./users");

// Api Routers
router.use("/session", sessionRouter);
router.use("/users", usersRouter);

/*****************************Routes*****************************/

module.exports = router;
