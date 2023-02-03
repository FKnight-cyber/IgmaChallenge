import { Router } from 'express';
import { findByCpf, userRegister, findUsers } from '../controllers/UserController';
import userValidation from '../middlewares/UserValidation';

const userRouter = Router();

userRouter.post('/register', userValidation ,userRegister);
userRouter.get('/user', findByCpf);
userRouter.get('/users', findUsers);

export default userRouter;