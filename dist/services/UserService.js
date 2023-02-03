"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../middlewares/errorHandler");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const cpfValidation_1 = __importStar(require("../utils/cpfValidation"));
async function register(data) {
    if ((0, cpfValidation_1.default)(data.cpf)) {
        const checkCpf = await UserRepository_1.default.findByCpf(data.cpf);
        if (checkCpf)
            throw (0, errorHandler_1.checkError)(401, "Cpf already registered!");
        data.birthday = new Date(data.birthday);
        data.cpf = (0, cpfValidation_1.formatCpf)(data.cpf);
        await UserRepository_1.default.insert(data);
    }
    else {
        throw (0, errorHandler_1.checkError)(422, "Invalid cpf!");
    }
}
;
async function getUser(cpf) {
    const user = await UserRepository_1.default.findByCpf(cpf);
    if (!user) {
        throw (0, errorHandler_1.checkError)(404, "This CPF wasn't registered!");
    }
    return user;
}
async function getUsers(page) {
    if (page) {
        return await UserRepository_1.default.getUsers(page);
    }
    else {
        return await UserRepository_1.default.getAllUsers();
    }
}
const UserServices = {
    register,
    getUser,
    getUsers
};
exports.default = UserServices;
