const express = require("express");

const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidatoinErros } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Notebook, Note } = require("../../db/models");

const router = express.Router();

/*****************************Middleware*****************************/

const validateNotebook = [];

/******************************Routes*******************************/
// GET /notebooks => return all users notebooks
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const userId = req.user.id;
    const notebooks = await Notebook.findAll({
      where: {
        userId,
      },
      include: {
        model: Note,
      },
    });
    return res.json(notebooks);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log(req.body, "@@@@@@@@@@@@");
    const notebook = await Notebook.create({
      userId: req.body.userId,
      title: req.body.title,
    });
    if (!notebook) {
      throw new Error("Unable to Create New Notebook");
    }
    return res.json(notebook);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const notebook = await Notebook.findByPk(req.params.id);
    if (!notebook) {
      throw new Error("Cannot Find Notebook");
    }
    await notebook.destroy();
    return res.json(req.params.id);
  })
);

router.patch(
  "/:id",
  asyncHandler(async (req, res) => {
    const notebook = await Notebook.findByPk(req.params.id);
    const { title } = req.body;
    if (!notebook) {
      throw new Error("Cannot Find Notebook");
    }
    await notebook.update({ title });
    return res.json(notebook);
  })
);

module.exports = router;
