import express from 'express';
import { AuthCont } from '../Composer/composer.js';

const authRouter = express.Router();

authRouter.post('/register', AuthCont.registerUser);
authRouter.post('/login', AuthCont.loginUser);

export default authRouter;