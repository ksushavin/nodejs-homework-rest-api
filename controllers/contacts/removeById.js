const { HttpError } = require("../../helpers");
const { removeContact } = require("../../models/contacts");

const removeById = async (req, res, next) => {
   
        const {id} = req.params;
        const result = await removeContact(id);
        
        if(!result) {
            throw HttpError(404, "Not found")
        }
        
        res.json({ message: "contact deleted"})
}

module.exports = removeById