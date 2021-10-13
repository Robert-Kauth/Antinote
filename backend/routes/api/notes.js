const express = require("express");

const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidatoinErros } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Note } = require("../../db/models");

const router = express.Router();

/*****************************Middleware*****************************/

const validateNote = [];

/******************************Routes*******************************/

//GET /notes => return all users notes
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const userId = req.user.id;
    const notes = await Note.findAll({
      where: {
        userId,
      },
    });
    return res.json(notes);
  })
);

module.exports = router;
