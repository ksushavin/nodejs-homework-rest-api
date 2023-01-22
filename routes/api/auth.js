const express = require("express");
const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate, upload, passport } = require("../../middlesweres");
const { schemas } = require("../../models/user");


const authRouter = express.Router();

authRouter.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));

authRouter.get("/google/callback", passport.authenticate("google", {session: false}), ctrlWrapper(ctrl.google));

//signup
authRouter.post("/signup", validateBody("Ошибка от Joi или другой библиотеки валидации", schemas.signupSchema), ctrlWrapper(ctrl.signup));

authRouter.get("/verify/:verificationCode", ctrlWrapper(ctrl.verify));

authRouter.post("/verify", validateBody(schemas.emailSchema), ctrlWrapper(ctrl.resentVerifyEmail));

authRouter.post("/login", validateBody("Ошибка от Joi или другой библиотеки валидации", schemas.loginSchema), ctrlWrapper(ctrl.login));

authRouter.get("/users/current", authenticate, ctrlWrapper(ctrl.getCurrent));

authRouter.post("/logout", authenticate, ctrlWrapper(ctrl.logout));


authRouter.patch("/users", authenticate, validateBody("Ошибка от Joi или другой библиотеки валидации", schemas.updateSubscriptionSchema), ctrlWrapper(ctrl.updateSubscription));


authRouter.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

module.exports = authRouter;