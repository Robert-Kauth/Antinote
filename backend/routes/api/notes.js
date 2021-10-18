const express = require("express");

const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Note, Notebook } = require("../../db/models");

const router = express.Router();

/*****************************Middleware*****************************/

const validateNote = [
  check("userId")
    .exists({ checkFalsy: true })
    .withMessage("A User ID must be provided")
    .isInt()
    .withMessage("User ID must be an number"),
  check("notebookId")
    .exists({ checkFalsy: true })
    .withMessage("A notebook ID must be provided"),
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Title must not be empty")
    .isLength({ max: 255 })
    .withMessage("Title can not be longer then 255 characters"),
  check("content")
    .exists({ checkFalsy: true })
    .isLength({ max: 500 })
    .withMessage("Content of Note can not be longer then 500 characters"),
  handleValidationErrors,
];

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

// GET notes in notebook
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const notes = await Note.findAll({
      where: {
        notebookId: req.params.id,
      },
      include: {
        model: Notebook,
      },
    });
    if (notes) {
      return res.json(notes);
    }
  })
);

router.patch(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const note = await Note.findByPk(req.params.id, {
      include: {
        model: Notebook,
      },
    });
    const { newContent } = req.body;
    if (!note) {
      throw new Error("Cannot find Note");
    }
    await note.update({ content: newContent });
    return res.json(note);
  })
);

router.post(
  "/",
  validateNote,
  asyncHandler(async (req, res, next) => {
    const { userId, notebookId, title, content } = req.body;
    const note = await Note.create({
      userId,
      notebookId,
      title,
      content,
    });
    const newNote = await Note.findByPk(note.id, {
      include: {
        model: Notebook,
      },
    });
    return res.json(newNote);
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
