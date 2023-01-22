const { User } = require("../../models/user");
const { HttpError, sendEmail } = require("../../helpers");

const resentVerifyEmail = async(req, res) => {
    const {email} = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.json({
            message: "missing required field email",
        })
    }

    if(user.verify) {
        res.json({
            message: "Verification has already been passed",
        })
    }

    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`
    };

    await sendEmail(verifyEmail);

    res.json({
        message: "Verify email resend",
    })
}

module.exports = resentVerifyEmail;