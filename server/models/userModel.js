import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    description: { type: String },
    userName: {
      unique: true,
      type: String,
      required: true,
    },
    followers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    phoneNumber: { type: Number, unique: true },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    profilePic: {
      type: mongoose.Types.ObjectId,
      ref: "Image",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, process.env.JWTSECRETKEY);
};

userSchema.statics.findByEmailPhoneOrUsername = async ({
  userName,
  email,
  phoneNumber,
}) => {
  if (await UserModel.findOne({ email }))
    throw new Error("User with this email already exists");

  if (await UserModel.findOne({ userName }))
    throw new Error("User with this username already exists");

  if (await UserModel.findOne({ phoneNumber }))
    throw new Error("User with this phoneNumber already exists");

  return false;
};

userSchema.statics.findUser = async ({ email, userName, phoneNumber, password }) => {
  let user;
  if (email) {
    user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("User with this email does not exists");
    }
  }
  if (userName) {
    user = await UserModel.findOne({ userName });
    if (!user) {
      throw new Error("User with this username does not exists");
    }
  }
  if (phoneNumber) {
    user = await UserModel.findOne({ phoneNumber });
    if (!user) {
      throw new Error("User with this phone number does not exists");
    }
  }

  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) throw new Error("Invalid Password !!!");

  return user;
};

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  // Generate bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    // Hash the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      // Assign hashed password
      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("User", userSchema);
