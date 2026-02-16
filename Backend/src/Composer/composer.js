import UserRepository from "../Repository/UserRepository.js";
import TokenGenerator from "../Utils/TokenGenerator.js";
import AuthServices from "../Service/AuthServices.js";
import AuthContoller from "../Controller/AuthController.js";
import ClinicRepository from "../Repository/ClinicRepository.js";
import ClinicService from "../Service/ClinicService.js";




export const UserRepo = new UserRepository();
export const TokenGen = new TokenGenerator();
export const AuthSer = new AuthServices();
export const AuthCont = new AuthContoller();
export const ClinicRepo = new ClinicRepository();
export const ClinicSer = new ClinicService();