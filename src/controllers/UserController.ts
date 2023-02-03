import { User } from '@prisma/client';
import { Request, Response } from 'express';
import UserServices from '../services/UserService';
import { UserCreationDto } from '../types/UserTypes';

export async function userRegister(req:Request, res:Response) {

  const data:UserCreationDto = req.body;

  await UserServices.register(data);

  return res.status(201).send("User successfully registered!");
};

export async function findByCpf(req:Request, res:Response) {
  const { cpf } = req.query;

  const user:User = await UserServices.getUser(cpf.toString());

  return res.status(200).send(user);
};

export async function findUsers(req:Request, res:Response) {
  const { page } = req.query;

  const users:User[] = await UserServices.getUsers(Number(page));

  return res.status(200).send(users);
};