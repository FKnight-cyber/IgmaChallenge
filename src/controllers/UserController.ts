import { Request, Response } from 'express';
import UserServices from '../services/UserService';
import { UserCreationDto } from '../types/UserTypes';

export async function userRegister(req:Request, res:Response) {

  const data:UserCreationDto = req.body;

  await UserServices.register(data);

  return res.status(201).send("User successfully registered!");
}