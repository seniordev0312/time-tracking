const Joi = require("joi");
const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/);

const validatePassword = (value) => {
  if (!passwordRegex.test(String(value))) {
    throw new Error(
      "Password should contains a lowercase, a uppercase character and a digit."
    );
  }
};

module.exports = {
  register: Joi.object().keys({
    first_name: Joi.string().required(),
    middle_name: Joi.string(),
    last_name: Joi.string().required(),
    place_birth: Joi.string(),
    date_birth: Joi.string(),
    date_passing: Joi.string(),
    mobile_number: Joi.string(),
    user_type: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required().external(validatePassword),
  }),
  login: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};
