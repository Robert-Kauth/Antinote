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

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const notebook = await Notebook.findByPk(req.params.id);
    console.log(notebook, "**************");
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
    console.log(notebook, "**************");
    const { title } = req.body;
    console.log(req.body, "!!!!!!!!!!!!!!!!");
    console.log(title);
    if (!notebook) {
      throw new Error("Cannot Find Notebook");
    }
    await notebook.update({ title });
    return res.json(notebook);
  })
);

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const notebook = await Notebook.findByPk(req.params.id);
//     return res.json(notebook);
//   })
// );

module.exports = router;
