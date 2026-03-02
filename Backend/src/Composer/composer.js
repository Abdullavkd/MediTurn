import UserRepository from "../Repository/UserRepository.js";
import TokenGenerator from "../Utils/TokenGenerator.js";
import AuthServices from "../Service/AuthServices.js";
import AuthContoller from "../Controller/AuthController.js";
import ClinicRepository from "../Repository/ClinicRepository.js";
import ClinicService from "../Service/ClinicService.js";
import ClinicController from "../Controller/ClinicController.js";
import AuthMiddleware from "../Middleware/AuthMiddleware.js";
import DoctorRepository from "../Repository/DoctorRepositoty.js";
import DoctorServices from "../Service/DoctorService.js";
import DoctorController from "../Controller/DoctorController.js";
import SendEmail from "../Utils/SendEmail.js";
import UserService from "../Service/UserService.js";
import UserController from "../Controller/UserController.js";
import AppointmentService from "../Service/AppointmentService.js";
import AppointmentController from "../Controller/AppointmentController.js";
import AppointmentRepository from "../Repository/AppointmentRepository.js";
import ReceptionistRepository from "../Repository/ReceptionistRepository.js";
import ReceptionistService from "../Service/ReceptionistService.js";
import ReceptionistController from "../Controller/ReceptionistController.js";
import CounterRepository from "../Repository/CounterRepository.js";
import CounterService from "../Service/CounterService.js";
import QueueController from "../Controller/QueueController.js";
import QueueService from "../Service/QueueService.js";




export const UserRepo = new UserRepository();
export const TokenGen = new TokenGenerator();
export const AuthSer = new AuthServices();
export const AuthCont = new AuthContoller();
export const ClinicRepo = new ClinicRepository();
export const ClinicSer = new ClinicService();
export const ClinicCont = new ClinicController();
export const AuthMiddle = new AuthMiddleware();
export const DoctorRepo = new DoctorRepository();
export const DoctorSer = new DoctorServices();
export const DoctorCont = new DoctorController();
export const EmailUtil = new SendEmail();
export const UserSer = new UserService();
export const UserCont = new UserController();
export const AppointmentSer = new AppointmentService();
export const AppointmentCont = new AppointmentController();
export const AppointmentRepo = new AppointmentRepository();
export const ReceptionistRepo = new ReceptionistRepository();
export const ReceptionistSer = new ReceptionistService();
export const ReceptionistCont = new ReceptionistController()
export const CounterRepo = new CounterRepository();
export const CounterSer = new CounterService();
export const QueueCont = new QueueController();
export const QueueSer = new QueueService();