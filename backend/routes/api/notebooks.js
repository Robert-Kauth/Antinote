const express = require("express");

const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Notebook, Note } = require("../../db/models");

const router = express.Router();

/*****************************Middleware*****************************/

const validateNotebook = [
  check("userId")
    .exists({ checkFalsy: true })
    .withMessage("A User ID must be provided")
    .isInt()
    .withMessage("User ID must be an number"),
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Title must not be empty")
    .isLength({ max: 255 })
    .withMessage("Title can not be longer then 255 characters"),
  handleValidationErrors,
];

const notebooksNotFoundError = (id) => {
  const err = Error("Notebooks not found");
  err.errors = [
    `Notebooks for the user with an id of ${id} could not be found`,
  ];
  err.title = "User notebooks not found";
  err.status = 404;
  return err;
};

const notebookNotFoundError = (notebookId) => {
  const err = Error("Notebook not found");
  err.errors = [`Noteboook with an id of ${notebookId} could not be found`];
  err.title = "Notebook not found";
  err.status = 404;
  return err;
};
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
    if (notebooks) {
        //TODO need to normalize notes in notebooks before sending to front-end
      return res.json(notebooks);

    } else {
      next(notebooksNotFoundError(userId));
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const notebook = await Notebook.findByPk(req.params.id, {
      include: {
        model: Note,
      },
    });
    if (notebook) {
     //TODO need to normalize notes in notebooks before sending to front-end
      return res.json(notebook);
    }
  })
);

router.post(
  "/",
  validateNotebook,
  asyncHandler(async (req, res) => {
    const { userId, title } = req.body;
    const notebook = await Notebook.create({
      userId,
      title,
    });
    if (!notebook) {
      throw new Error("Unable to Create New Notebook");
    }
    const newNotebook = await Notebook.findByPk(notebook.id, {
      include: {
        model: Note,
      },
    });
    //TODO need to normalize notes in notebooks before sending to front-end
    return res.json(newNotebook);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const notebook = await Notebook.findByPk(req.params.id);
    if (notebook) {
      await notebook.destroy();
      return res.json(req.params.id);
    } else {
      next(notebookNotFoundError(req.params.id));
    }
  })
);

router.patch(
  "/:id",
  validateNotebook,
  asyncHandler(async (req, res, next) => {
    const notebook = await Notebook.findByPk(req.params.id, {
      include: {
        model: Note,
      },
    });
    const { userId, title } = req.body;
    if (notebook) {
    //TODO need to normalize notes in notebooks before sending to front-end
      await notebook.update({ userId, title });
      return res.json(notebook);
    } else {
      next(notebookNotFoundError(req.params.id));
    }
  })
);

module.exports = router;
