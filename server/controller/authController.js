import express from "express";
import { UserModel } from "../models/index.js";
import { ValidateSignin, ValidateSignup } from "../validators/authValidator.js";

const userSignin = async (req, res) => {
  try {
    await ValidateSignin(req.body);
    const user = await UserModel.findUser(req.body);
    const token = user.generateJwtToken();
    return res.status(200).json({ token: token, status: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const userSignup = async (req, res) => {
  try {
    await ValidateSignup(req.body);
    await UserModel.findByEmailPhoneOrUsername(req.body);
    const newUser = await UserModel.create(req.body);
    const token = newUser.generateJwtToken();

    return res.status(200).json({ token: token, status: "Success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export {
    userSignin,
    userSignup
}
