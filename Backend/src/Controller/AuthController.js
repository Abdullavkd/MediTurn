import { AuthSer } from "../Composer/composer";

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
            res.status(error.message || 500).json({success: false, message: error.message});
        }
    }


    async loginUser(req, res) {
        try {
            const {email, password} = req.body;
            const {accessToken, refreshToken, user} = await AuthSer.login(email, password);
            
            // save accessToken in cookies
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000
            })

            // save refreshToken in cookies
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                samSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })

            res.status(200).json({
                success: true,
                data: {name: user.name, email: user.email, role: user.role, status: user.status}
            })
        } catch (error) {
            res.status(error.status || 500).json({success: false, message: error.message})
        }
    }
}

export default AuthContoller;