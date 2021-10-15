const express = require("express");

const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidatoinErros } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Note, User, Notebook } = require("../../db/models");

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
      include: {
        model: Notebook,
      },
    });
    return res.json(notes);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const note = await Note.findByPk(req.params.id);
    if (!note) {
      throw new Error("Cannot Find Note");
    }
    await note.destroy();
    return res.json(req.params.id);
  })
);

module.exports = router;
