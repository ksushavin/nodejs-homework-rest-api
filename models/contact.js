const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
  
}, { versionKey: false, timestamps: true });

contactSchema.post("save", handleMongooseError); //спрацює, якщо валідація пост або пут не пропустить

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

const Contact = model("contacts", contactSchema);

const schemas = {
    addSchema,
    updateFavoriteSchema,
}

module.exports = {
    Contact,
    schemas,
};