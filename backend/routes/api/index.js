const router = require("express").Router();

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie test route
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth");
const { User } = require("../../db/models");
router.get(
  "/set-token-cookie",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: "Demo-lition",
      },
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

// GET /api/restore-user test route
const { restoreUser } = require("../../utils/auth");
router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});

// GET /api/require-auth test route
const { requireAuth } = require("../../utils/auth");
router.get("/require-auth", requireAuth, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
