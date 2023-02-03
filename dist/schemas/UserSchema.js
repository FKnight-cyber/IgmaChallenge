"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const Joi = require('joi')
    .extend(require('@joi/date'));
const userSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    cpf: joi_1.default.string().pattern(new RegExp("[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}")).required(),
    birthday: Joi.date().format('YYYY-MM-DD').utc().required()
});
exports.default = userSchema;
