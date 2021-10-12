const express = require("express");

const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidatoinErros } = require("../../utils/validation");
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");

const db = require("../../db/models");

const router = express.Router();

/*****************************Middleware*****************************/

const validateNotebook = [];

/******************************Routes*******************************/
// GET /notebooks => return all users notebooks
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { user } = req.user;
    const userId = user.id;
    console.log(user);

    const notebooks = await db.Notebooks.findAll({
      where: {
        userId,
      },
    });
    console.log(notebooks);
    return res.json(notebooks);
  })
);

module.exports = router;
