import express from 'express';
import { UserCont, AuthMiddle } from '../Composer/composer.js';

const userRouter = express.Router();

userRouter.get('/users', AuthMiddle.verifyToken, AuthMiddle.authorize('SuperAdmin'), UserCont.getAllUsers);
userRouter.get('/user-profile', AuthMiddle.verifyToken, UserCont.getUserById);
userRouter.put('/user-update', AuthMiddle.verifyToken, UserCont.updateUser);
userRouter.delete('/user-delete', AuthMiddle.verifyToken, UserCont.deleteUser);

export default userRouter;