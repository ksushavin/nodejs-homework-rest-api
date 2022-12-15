const express = require('express');
const {ctrlWrapper} = require("../../helpers");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlesweres");
const schemas = require("../../schemas/contacts")

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:id', ctrlWrapper(ctrl.getById));

router.post('/', validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.delete('/:id', ctrlWrapper(ctrl.removeById))

router.put('/:id', validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById))

module.exports = router
