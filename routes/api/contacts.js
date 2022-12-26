const express = require('express');
const {ctrlWrapper} = require("../../helpers");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate  } = require("../../middlesweres");
const { schemas } = require("../../models/contact");


const router = express.Router();

router.get('/', authenticate, ctrlWrapper(ctrl.getAll));

router.get('/:id', authenticate, isValidId("Invalid id"), ctrlWrapper(ctrl.getById));

router.post('/', authenticate, validateBody("missing required name field", schemas.addSchema), ctrlWrapper(ctrl.add));

router.delete('/:id', authenticate, isValidId("Invalid id"), ctrlWrapper(ctrl.removeById));

router.put('/:id', authenticate, isValidId("Invalid id"), validateBody("missing fields", schemas.addSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", authenticate, isValidId("Invalid id"), validateBody("missing field favorite", schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateById));

module.exports = router
