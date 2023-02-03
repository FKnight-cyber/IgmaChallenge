import prisma from "../database";
import { UserCreationDto } from "../types/UserTypes";
import { formatCpf } from "../utils/cpfValidation";

async function insert(data:UserCreationDto) {
  await prisma.user.create({data});
};

async function findByCpf(cpf:string) {
  return await prisma.user.findFirst({where:{cpf:formatCpf(cpf)}});
};

async function getUsers(page:number) {
  return await prisma.user.findMany({
    orderBy:{
      id:'asc'
    },
    skip:5*(page - 1),
    take:5
  });
};

async function getAllUsers() {
  return await prisma.user.findMany();
};

const UserRepository = {
  insert,
  findByCpf,
  getUsers,
  getAllUsers
};

export default UserRepository;