const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (message) => {
   const func = (req, res, next) => {
       const { id } = req.params;
       
        if(!isValidObjectId(id)) {
            next(HttpError(404, message))
        }
        next()
    }
    return func;
}



module.exports = isValidId;