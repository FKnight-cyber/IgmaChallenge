import joi from 'joi';

const Joi = require('joi')
    .extend(require('@joi/date'));

const userSchema = joi.object({
  name: joi.string().required(),
  cpf: joi.string().pattern(new RegExp("[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}")).required(),
  birthday: Joi.date().format('YYYY-MM-DD').utc().required()
});

export default userSchema;