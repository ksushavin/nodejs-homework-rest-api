const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {

    const { path: tempUpload, originalname } = req.file;
    const { _id } = req.user;
    const filename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarDir, filename);
    await fs.rename(tempUpload, resultUpload);

    const avatarUrl = path.join("avatars", filename); // "public" не вказуємо, бо вона в app.use вже прописана

    await User.findByIdAndUpdate(_id, { avatarUrl }); // перезаписали

    res.json({
        avatarUrl,
    })
}

module.exports = updateAvatar;