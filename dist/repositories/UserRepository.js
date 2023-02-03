"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const cpfValidation_1 = require("../utils/cpfValidation");
async function insert(data) {
    await database_1.default.user.create({ data });
}
;
async function findByCpf(cpf) {
    return await database_1.default.user.findFirst({ where: { cpf: (0, cpfValidation_1.formatCpf)(cpf) } });
}
;
async function getUsers(page) {
    return await database_1.default.user.findMany({
        orderBy: {
            id: 'asc'
        },
        skip: 5 * (page - 1),
        take: 5
    });
}
;
async function getAllUsers() {
    return await database_1.default.user.findMany();
}
;
const UserRepository = {
    insert,
    findByCpf,
    getUsers,
    getAllUsers
};
exports.default = UserRepository;
