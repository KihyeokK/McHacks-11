// import User model
// const User = require("../models/User");

exports.createUser = async (req, res) => {  
    return res.status(200).json({
        where: "createUser"
    });
}   

exports.getUser = async (req, res) => {
    return res.status(200).json({
        where: "getUser"
    });
}