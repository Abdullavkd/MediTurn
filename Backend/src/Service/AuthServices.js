import { TokenGen, UserRepo } from "../Composer/composer.js";
import bcrypt from 'bcryptjs';


class AuthServices {
    async login(email, password) {
        try {
            const user = await UserRepo.findByEmail(email);
            if(!user || !user.role) throw new Error("User not found");

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) throw new Error("Incurrect password");
            
            const {accessToken, refreshToken} = TokenGen.tokenGenerator(user.id, user.role);
            return {accessToken, refreshToken, user}
        } catch (error) {
            throw error;
        }
    }

    
    async register(name, email, password, role) {
        try {
            if(!name || !email || !password || !role) throw new Error("name, email, password and role are required");

            const isExist = await UserRepo.findByEmail(email);
            if(isExist) throw new Error("User already Exist");

            // hash password
            const hashedPass = await bcrypt.hash(password, 10);

            // create account
            const newUser = await UserRepo.create({name, email, password: hashedPass, role});

            return newUser;
        } catch (error) {
            throw error;
        }
    }
}
export default AuthServices;