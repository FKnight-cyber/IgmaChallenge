import { PrismaClient } from '@prisma/client';
import { UserCreationDto } from '../src/types/UserTypes';
const prisma = new PrismaClient();


const users = [
  {
    name: "Fulano de tal",
    cpf: "11144477735",
    birthday: new Date("1999-11-09")
  },
  {
    name: "Cicrano",
    cpf: "47410743743",
    birthday: new Date("1998-12-28")
  },
  {
    name: "Beltrano",
    cpf: "14438583314",
    birthday: new Date("1989-05-14")
  },
  {
    name: "Gol D. Roger",
    cpf: "87649293378",
    birthday: new Date("1978-07-07")
  },
  {
    name: "Aruka",
    cpf: "48312863893",
    birthday: new Date("2001-08-21")
  },
  {
    name: "Kaguya",
    cpf: "58325407433",
    birthday: new Date("1979-09-11")
  },
  {
    name: "Suzumyia Haruno",
    cpf: "18812192670",
    birthday: new Date("2003-11-11")
  },
  {
    name: "Monkey D. Luffy",
    cpf: "12448151105",
    birthday: new Date("2004-11-12")
  },
  {
    name: "Katakuri",
    cpf: "86592895799",
    birthday: new Date("1977-05-01")
  },
  {
    name: "Raiden",
    cpf: "529.982.247-25",
    birthday: new Date("1976-03-14")
  },
  {
    name: "D. Pedro II",
    cpf: "297.679.147-30",
    birthday: new Date("1825-12-02")
  },
]

async function main() {
  await insertUsers(users);
};

async function insertUsers(users:UserCreationDto[]) {
  for(const user of users) {
    await prisma.user.upsert({
      where:{
        cpf: user.cpf
      },
      update: {
        name: user.name,
        cpf: user.cpf,
        birthday: user.birthday
      },
      create: {
        name: user.name,
        cpf: user.cpf,
        birthday: user.birthday
      }
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });