const {Contact} = require("../../models/contact");

const getAll = async (req, res, next) => {

    const { _id: owner } = req.user;
    const { page = 1, limit = 20, favorite } = req.query;
    const skip = (page-1)*limit
    const result = await Contact.find({owner, favorite}, "-createdAt -updatedAt", {skip, limit}).populate("owner", "email"); // skip - пропустити, limit - скільки взяти

    if (!result) {
        throw new Error();
    }
    res.json(result);
}

module.exports = getAll;