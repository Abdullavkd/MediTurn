import express from 'express';
import { AuthCont, AuthMiddle } from '../Composer/composer.js';

const authRouter = express.Router();

authRouter.post('/register', AuthCont.registerUser);
authRouter.post('/login', AuthCont.loginUser);
authRouter.post('/logout', AuthMiddle.verifyToken, AuthCont.logoutUser);
authRouter.post('/forgot-password', AuthCont.forgotPassword);
authRouter.post('/reset-password', AuthCont.resetPassword);
authRouter.delete('/delete-account', AuthMiddle.verifyToken, AuthCont.deleteAccount);

export default authRouter;