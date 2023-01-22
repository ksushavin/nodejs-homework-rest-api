const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resentVerifyEmail = require("./resentVerifyEmail");
const google = require("./google")


module.exports = {
    signup,
    login,
    getCurrent,
    logout,
    updateSubscription,
    updateAvatar,
    verify,
    resentVerifyEmail,
    google,
}