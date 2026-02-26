import { EmailUtil, TokenGen, UserRepo } from "../Composer/composer.js";
import bcrypt from 'bcryptjs';


class AuthServices {
    async login(email, password) {
        try {
            const user = await UserRepo.findByEmail(email);
            if(!user || !user.role) throw new Error("User not found");

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) throw new Error("Incurrect password");
            
            const tokens = TokenGen.tokenGenerator(user.id, user.role);
            
            return {refreshToken: (await tokens).refreshToken, accessToken: (await tokens).accessToken, user}
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


    // function to update user details by user id
    async updateUserDetails(userId, updateData) {
        try {
            if(!userId) throw new Error("User ID is required for updating user details");
            const updatedUser = await UserRepo.update(userId, updateData);
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }


    // function to delete user account by user id
    async deleteUserAccount(userId) {
        try {
            if(!userId) throw new Error("User ID is required for deleting user account");
            return await UserRepo.delete(userId);
        } catch (error) {
            throw error;
        }
    }


    // function to refresh access token using refresh token
    async refreshAccessToken(refreshToken) {
        try {
            if(!refreshToken) throw new Error("No refresh token provided");

            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            const userId = decoded.id;
            const userRole = decoded.role;

            const newTokens = await TokenGen.tokenGenerator(userId, userRole);
            return newTokens.accessToken;
        } catch (error) {
            throw error;
        }
    }


    // function to forgot password and send otp to email
    async forgotPassword(email) {
        try {
            if(!email) throw new Error("Email is required for forgot password");

            const user = await UserRepo.findByEmail(email);
            if(!user) throw new Error("User not found with this email");

            // generate OTP and save to database
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            await UserRepo.saveOtp(email, otp);

            // send OTP to email
            await EmailUtil.sendOtpEmail(email, otp);

            return {message: "OTP sent to email"};
        } catch (error) {
            throw error;
        }
    }
    

    // function to reset password using OTP
    async resetPassword(email, otp, newPassword) {
        try {
            if(!email || !otp || !newPassword) throw new Error("Email, OTP and new password are required for resetting password");

            const user = await UserRepo.findByEmail(email);
            if(!user) throw new Error("User not found with this email");

            // verify OTP
            const isValidOtp = await UserRepo.verifyOtp(email, otp);
            if(!isValidOtp) throw new Error("Invalid OTP");

            // hash new password
            const hashedPass = await bcrypt.hash(newPassword, 10);

            // update password
            await UserRepo.update(user.id, {password: hashedPass});

            return {message: "Password reset successfully"};
        } catch (error) {
            throw error;
        }
    }


    // function to update user profile
    async updateProfile(userId, updateData) {
        try {
            if(!userId) throw new Error("User ID is required for updating profile");
            const updatedUser = await UserRepo.update(userId, updateData);
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }


    // function to delete user account
    async deleteAccount(userId) {
        try {
            if(!userId) throw new Error("User ID is required for deleting account");
            return await UserRepo.delete(userId);
        } catch (error) {
            throw error;
        }
    }
}
export default AuthServices;