const {Contact} = require("../../models/contact");

const getAll = async (req, res, next) => {

        const result = await Contact.find({});

        if (!result) {
            throw new Error();
        }
        res.json(result);
}

module.exports = getAll;