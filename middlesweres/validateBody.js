const {HttpError} = require("../helpers");

const validateBody = (message, schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        
        if (error) {
            next(HttpError(400, message));
        }
        next()
    }

    return func;
};


module.exports = validateBody