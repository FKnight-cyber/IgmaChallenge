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
    throw checkError(406, "Cpf inválido!");
  }
};

const UserServices = {
  register
};

export default UserServices;