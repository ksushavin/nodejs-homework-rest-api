const getCurrent = (req, res) => { 

    const { subscription, email } = req.user;
    
     res.status(201).json({
        user: {
            email: email,
            subscription: subscription 
        } 
    })
}

module.exports = getCurrent; 