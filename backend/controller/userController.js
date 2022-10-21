const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const { sign } = require('jsonwebtoken');
const User = require("../models/userModel");

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (user) {
        if (password == user.password) {
            const token = jsonwebtoken.sign(
              {
                user_id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone_number: user.phone_number,
                
              },
              "LOST_AND_FOUND_SECRET"
            );
            res.json({ success: true, data: token });
          }
          throw new Error("Wrong Password Try Again");
          
      }
      else {
          throw new Error ("Couldn't find your Lost_and_Found account")
          
      }
      
    
  } catch (e) {
    next(e);
  }
};
module.exports.signup = async (req, res, next) => {
    const { phone_number, email, password, first_name, last_name } = req.body;
    try {
        const exUser = await User.findOne({ email });
        if (!exUser) {
            const user = await User.create({
              email, password, first_name,last_name, phone_number,
            });
            const token = jsonwebtoken.sign({
                user_id:user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone_number: user.phone_number,
            }, 'LOST_AND_FOUND_SECRET');
            res.status(200).json({ data:token });
        }
        else {
            res.status(409).json({ message: 'User Already Exit' });
          }
    }
    catch(e) {
        next(e)
        
    }

    
}
