import prisma from "../database";
import { UserCreationDto } from "../types/UserTypes";
import { formatCpf } from "../utils/cpfValidation";

async function insert(data:UserCreationDto) {
  await prisma.user.create({data});
};

async function findByCpf(cpf:string) {
  return await prisma.user.findFirst({where:{cpf:formatCpf(cpf)}});
}

const UserRepository = {
  insert,
  findByCpf
};

export default UserRepository;