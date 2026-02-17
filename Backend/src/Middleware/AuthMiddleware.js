import jwt from 'jsonwebtoken';

class AuthMiddleware {
    async verifyToken (req, res, next) {
        try {
            const token = req.cookies.accessToken;
            
            if(!token) throw new Error("Accecc Denied: No token");

            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if(err) throw new Error("Token Expired")
                
                req.user = decoded;
            })
            next();
        } catch (error) {
            res.status(error.status || 500).json(error.message || "Server Error");
        }
    }


    authorize(...roles) {
        return (req, res, next) => {
            try {
                if(!req.user || !roles.includes(req.user.role)) throw new Error(`User Role '${req.user.role}' is not authorized`);
                next();
            } catch (error) {
                res.status(error.status || 500).json(error.message || "Server Error");
            }
        }
    }
}


export default AuthMiddleware;