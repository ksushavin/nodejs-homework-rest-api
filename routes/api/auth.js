const express = require("express");
const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlesweres");
const { schemas } = require("../../models/user");


const authRouter = express.Router();

//signup
authRouter.post("/signup", validateBody("Ошибка от Joi или другой библиотеки валидации", schemas.signupSchema), ctrlWrapper(ctrl.signup));

authRouter.post("/login", validateBody("Ошибка от Joi или другой библиотеки валидации", schemas.loginSchema), ctrlWrapper(ctrl.login));

authRouter.get("/users/current", authenticate, ctrlWrapper(ctrl.getCurrent));

authRouter.post("/logout", authenticate, ctrlWrapper(ctrl.logout));


authRouter.patch("/users", authenticate, validateBody("Ошибка от Joi или другой библиотеки валидации", schemas.updateSubscriptionSchema), ctrlWrapper(ctrl.updateSubscription));


module.exports = authRouter;