const Joi = require("joi");

const fileCreateSchema = Joi.object({
  name: Joi.string().required().min(1).max(255).messages({
    "string.base": `"name" should be a type of 'text'`,
    "string.empty": `"name" cannot be an empty field`,
    "string.min": `"name" should have a minimum length of {#limit}`,
    "string.max": `"name" should have a maximum length of {#limit}`,
    "any.required": `"name" is a required field`,
  }),
  content: Joi.object().required().messages({
    "object.base": `"content" should be a type of 'object'`,
    "any.required": `"content" is a required field`,
  }),
});

const fileUpdateSchema = Joi.object({
  content: Joi.object().required().messages({
    "object.base": `"content" should be a type of 'object'`,
    "any.required": `"content" is a required field`,
  }),
});

module.exports = { fileCreateSchema, fileUpdateSchema };
