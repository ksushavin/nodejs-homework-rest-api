const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const userSchema = new Schema({
    email: {
        type: String,
        match: emailRegexp,
        unique: true,
        required: [true, 'Email is required'],
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
  },
    password: {
        type: String,
        minlength: 6,
        required: [true, 'Password is required'],
    },
    token: {
        type: String,
        default: null,
  },
}, { versionKey: false, timestamps: true });




userSchema.post("save", handleMongooseError)

const signupSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const updateSubscriptionSchema = Joi.object({
subscription: Joi.any().valid("starter", "pro", "business").required(),
})

const schemas = {
    signupSchema,
    loginSchema,
    updateSubscriptionSchema
}

const User = model("user", userSchema);

module.exports = {
    User,
    schemas,
}