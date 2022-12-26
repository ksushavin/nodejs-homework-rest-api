const { User } = require("../../models/user");

const updateSubscription = async (req, res) => {

    const user = req.user;

    const {subscription} = req.body;

    const result = await User.findByIdAndUpdate(user._id, {subscription}, { new: true })
    
  
    if(!result) {
        throw HttpError(404, "Not found")
    }

    res.json(result)
}

module.exports = updateSubscription;