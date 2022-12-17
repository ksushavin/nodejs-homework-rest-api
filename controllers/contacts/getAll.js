const { listContacts } = require("../../models/contacts");

const getAll = async (req, res, next) => {

        const result = await listContacts();

        if (!result) {
            throw new Error();
        }
        res.json(result);
}

module.exports = getAll;