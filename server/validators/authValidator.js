import joi from "joi";

export const ValidateSignin = (userData) => {
  const Scheme = joi.object({
    userName: joi.string().min(5).max(20),
    email: joi.string().email(),
    phoneNumber: joi.string().min(10).max(10),
    password: joi.string().required().min(5),
  });
  return Scheme.validateAsync(userData);
};

export const ValidateSignup = (userData) => {
  const Scheme = joi.object({
    userName: joi.string().min(5).max(20),
    email: joi.string().email(),
    phoneNumber: joi.string().min(10).max(10),
    password: joi.string().required().min(5),
    name: joi.string(),
  });
  return Scheme.validateAsync(userData);
};
