import express from "express";
import { userLogin } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post('/login', userLogin);