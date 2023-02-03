import { Router } from 'express';
import { userRegister } from '../controllers/UserController';
import userValidation from '../middlewares/UserValidation';

const userRouter = Router();

userRouter.post('/register', userValidation ,userRegister);

export default userRouter;