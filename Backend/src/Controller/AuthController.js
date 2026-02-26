import { AuthSer } from "../Composer/composer.js";

class AuthContoller {
    async registerUser(req, res) {
        try {
            const {name, email, password, role} = req.body;
            const newUser = await AuthSer.register(name, email, password, role);
            res.status(201).json({
                success: true,
                data: newUser
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }


    async loginUser(req, res) {
        try {
            const {email, password} = req.body;
            const data = await AuthSer.login(email, password);

            // save accessToken in cookies
            res.cookie('accessToken', data.accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000
            })
            
            // save refreshToken in cookies
            res.cookie('refreshToken', data.refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            

            res.status(200).json({
                success: true,
                data: {name: data.user.name, email: data.user.email, role: data.user.role, status: data.user.status}
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message})
        }
    }


    // function to logout user
    async logoutUser(req, res) {
        try {
            const refreshToken = req.cookies.refreshToken;
            const accessToken = req.cookies.accessToken;

            if(!refreshToken || !accessToken) throw new Error("No token found");

            // Clear the accessToken and refreshToken cookies
            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');

            res.status(200).json({
                success: true,
                message: "User logged out successfully"
            });
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }


    // function to refresh access token using refresh token --- IGNORE ---
    async refreshToken(req, res) {
        try {
            const refreshToken = req.cookies.refreshToken;

            const newToken = await AuthSer.refreshAccessToken(refreshToken);

            // save new accessToken in cookies
            res.cookie('accessToken', newToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000
            })

            res.status(200).json({
                success: true,
                accessToken: newToken
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }


    // fuction to forget password and send otp to email
    async forgotPassword(req, res) {
        try {
            const {email} = req.body;
            await AuthSer.forgotPassword(email);
            res.status(200).json({
                success: true,
                message: "OTP sent to email successfully"
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }


    // function to reset password using otp
    async resetPassword(req, res) {
        try {
            const {email, otp, newPassword} = req.body;
            await AuthSer.resetPassword(email, otp, newPassword);
            res.status(200).json({
                success: true,
                message: "Password reset successfully"
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }


    // function to update user profile
    async updateProfile(req, res) {
        try {
            const userId = req.user.id;
            const updateData = req.body;
            const updatedUser = await AuthSer.updateProfile(userId, updateData);
            res.status(200).json({
                success: true,
                data: updatedUser
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }


    // function to delete user account
    async deleteAccount(req, res) {
        try {
            const userId = req.user.id;
            await AuthSer.deleteAccount(userId);

            // Clear the accessToken and refreshToken cookies
            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');

            res.status(200).json({
                success: true,
                message: "User account deleted successfully"
            });
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message});
        }
    }
}

export default AuthContoller;