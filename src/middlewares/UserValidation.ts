import { Request, Response, NextFunction } from "express";
import userSchema from "../schemas/UserSchema";

export default function userValidation(req:Request, 
  res:Response, 
  next:NextFunction) {
      const { error } = userSchema.validate(req.body, {abortEarly:false});

      if(error) return res.status(422).send(error.details.map(detail => detail.message));

      next();
};