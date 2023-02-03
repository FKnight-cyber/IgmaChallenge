import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import userRouter from '../src/routes/UserRoutes';
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(json());
app.use(cors());
app.use(userRouter);
app.use(errorHandler);

export default app;