const express = require('express');
const {ctrlWrapper} = require("../../helpers");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId  } = require("../../middlesweres");
const { schemas } = require("../../models/contact");


const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:id', isValidId("Invalid id"), ctrlWrapper(ctrl.getById));

router.post('/', validateBody("missing required name field", schemas.addSchema), ctrlWrapper(ctrl.add));

router.delete('/:id', isValidId("Invalid id"), ctrlWrapper(ctrl.removeById));

router.put('/:id', isValidId("Invalid id"), validateBody("missing fields", schemas.addSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", isValidId("Invalid id"), validateBody("missing field favorite", schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateById));

module.exports = router
