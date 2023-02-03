import { Router } from 'express';
import { findByCpf, userRegister } from '../controllers/UserController';
import userValidation from '../middlewares/UserValidation';

const userRouter = Router();

userRouter.post('/register', userValidation ,userRegister);
userRouter.get('/user', findByCpf);

export default userRouter;