const router = require("express").Router();

const sessionRouter = require("./session");
const usersRouter = require("./users");

// Api Routers
router.use("/session", sessionRouter);
router.use("/users", usersRouter);

// Routes

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
