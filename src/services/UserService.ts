import { User } from "@prisma/client";
import { checkError } from "../middlewares/errorHandler";
import UserRepository from "../repositories/UserRepository";
import { UserCreationDto } from "../types/UserTypes";
import validateCpf, { formatCpf } from "../utils/cpfValidation";

async function register(data:UserCreationDto) {
  data.birthday = new Date(data.birthday);
  if(validateCpf(data.cpf)) {

    const checkCpf = await UserRepository.findByCpf(data.cpf);

    if(checkCpf) throw checkError(401, "Cpf already registered!");

    data.cpf = formatCpf(data.cpf);
    await UserRepository.insert(data);
  }else {
    throw checkError(422, "Cpf inválido!");
  }
};

async function getUser(cpf:string) {
  const user:User = await UserRepository.findByCpf(cpf);

  if(!user) {
    throw checkError(404, "This CPF wasn't registered!");
  }

  return user;
}

const UserServices = {
  register,
  getUser
};

export default UserServices;