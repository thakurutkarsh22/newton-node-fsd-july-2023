const joi = require("joi");
const { CONSTANTS_CREATE_USER } = require("../../util/constants");

const createUserSchema = joi.object({
  username: joi
    .string()
    .alphanum()
    .min(CONSTANTS_CREATE_USER.min)
    .max(CONSTANTS_CREATE_USER.max)
    .required(),

  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),

  email: joi
    .string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),

  contact: joi
    .string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` }),
});

module.exports = { createUserSchema };
