const {Contact} = require("../../models/contact");

const removeById = async (req, res, next) => {
   
        const {id} = req.params;
        const result = await Contact.findByIdAndRemove(id);
        
        if(!result) {
            throw HttpError(404, "Not found")
        }
        
        res.json({ message: "contact deleted"})
}

module.exports = removeById