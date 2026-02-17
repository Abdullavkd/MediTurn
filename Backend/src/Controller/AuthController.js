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
}

export default AuthContoller;