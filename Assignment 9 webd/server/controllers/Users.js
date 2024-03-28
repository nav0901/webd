
const User = require('../models/users.model');
const bcrypt= require("bcryptjs");

const Login = async(req,res) => {
    
    const user = await User.findOne({
        email: req.body.email,
    })

    if (!user) {
		return res.json({stutus:'error', user:false})
	}

    const userPassword = await bcrypt.compare(
		req.body.password,
		user.password
	)

    if(userPassword){
        return res.json({stutus:'ok', user:true})
    } else{
        return res.json({stutus:'error', user:false})
    }
}

module.exports = Login;