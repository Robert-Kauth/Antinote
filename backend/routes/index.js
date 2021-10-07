const express = require("express");
const router = express.Router();

// Routers
const apiRouter = require("./api");

router.use("/api", apiRouter);

// Routes

router.get("/hello/world", (req, res) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello World!");
});

module.exports = router;
