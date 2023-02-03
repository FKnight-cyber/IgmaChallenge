"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserValidation_1 = __importDefault(require("../middlewares/UserValidation"));
const userRouter = (0, express_1.Router)();
userRouter.post('/register', UserValidation_1.default, UserController_1.userRegister);
userRouter.get('/user', UserController_1.findByCpf);
userRouter.get('/users', UserController_1.findUsers);
exports.default = userRouter;
