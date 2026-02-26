import express from 'express';
import { UserCont, AuthMiddle } from '../Composer/composer.js';

const userRouter = express.Router();

userRouter.get('/users', AuthMiddle.verifyToken, AuthMiddle.authorize('SuperAdmin'), UserCont.getAllUsers);
userRouter.get('/users/:id', AuthMiddle.verifyToken, AuthMiddle.authorize('SuperAdmin'), UserCont.getUserById);
userRouter.put('/users/:id', AuthMiddle.verifyToken, AuthMiddle.authorize('SuperAdmin'), UserCont.updateUser);
userRouter.delete('/users/:id', AuthMiddle.verifyToken, AuthMiddle.authorize('SuperAdmin'), UserCont.deleteUser);

export default userRouter;