const express = require("express");

const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidatoinErros } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Note, Notebook } = require("../../db/models");

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
  asyncHandler(async (req, res, next) => {
    const { userId, notebookId, title, content } = req.body;
    console.log(notebookId, "*********notebookId");
    const note = await Note.create({
      userId,
      notebookId,
      title,
      content,
    });
    console.log(note, "#####NEW NOTE#########");
    if (!note) {
      throw new Error("Unable to create new note.");
    }
    const newNote = await Note.findByPk(note.id, {
      include: {
        model: Notebook,
      },
    });
    console.log(newNote, "!!!!!!!!!NEW NOTE!!!!!!!!!");
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
