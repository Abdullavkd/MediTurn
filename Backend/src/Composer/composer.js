import UserRepository from "../Repository/UserRepository.js";
import TokenGenerator from "../Utils/TokenGenerator.js";
import AuthServices from "../Service/AuthServices.js";



export const UserRepo = new UserRepository();
export const TokenGen = new TokenGenerator();
export const AuthSer = new AuthServices();