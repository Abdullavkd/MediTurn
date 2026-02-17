import jwt from 'jsonwebtoken';

class TokenGenerator {
    async tokenGenerator (id, role) {
        
        const accessToken = jwt.sign({id, role},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '5m'}
        )

        const refreshToken = jwt.sign({id, role},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '7d'}
        )

        return {accessToken, refreshToken}
    }
}
export default TokenGenerator;