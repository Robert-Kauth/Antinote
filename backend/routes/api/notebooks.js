const express = require("express");

const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidatoinErros } = require("../../utils/validation");
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");

const { Notebook } = require("../../db/models");

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
    const notebooks = await Notebook.findAll();
    return res.json(notebooks);
  })
);

module.exports = router;
