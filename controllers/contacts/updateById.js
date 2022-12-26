const {Contact} = require("../../models/contact");
const { HttpError } = require("../../helpers");


const updateById = async (req, res, next) => {
    const {id} = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});  //{new: true} - щоб постман повертав оновлену версію
    
    if(!result) {
        throw HttpError(404, "Not found")
    }

    res.json(result)
}

module.exports = updateById