"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUsers = exports.findByCpf = exports.userRegister = void 0;
const UserService_1 = __importDefault(require("../services/UserService"));
async function userRegister(req, res) {
    const data = req.body;
    await UserService_1.default.register(data);
    return res.status(201).send("User successfully registered!");
}
exports.userRegister = userRegister;
;
async function findByCpf(req, res) {
    const { cpf } = req.query;
    const user = await UserService_1.default.getUser(cpf.toString());
    return res.status(200).send(user);
}
exports.findByCpf = findByCpf;
;
async function findUsers(req, res) {
    const { page } = req.query;
    const users = await UserService_1.default.getUsers(Number(page));
    return res.status(200).send(users);
}
exports.findUsers = findUsers;
;
