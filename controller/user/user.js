const User = require("../../models/User");
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const { JWT_SECRET } = require('../../config/config');
// const UserOtp = require("../../models/UserOtp");
// const nodemailer = require("nodemailer");



exports.addUser = async (req, res) => {
    
    try {


        res.json({ message: 'User created successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
};

exports.addUser = async (req, res) => {
    
    try {


        res.json({ message: 'User created successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
};