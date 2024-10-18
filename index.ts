import { verify, sign } from 'jsonwebtoken';
import { config } from 'dotenv'; config()


const secretKey = process.env.JWT_SECRET_KEY || "JWT_SECRET_KEY";


export const generateToken = (userId: string, days?: number) => {
    return sign({ userId }, secretKey, { expiresIn: days + ' days' });
}

export const isTokenExpired = (token: string) => {
    try {
        const decoded = verify(token, secretKey);
        return decoded;
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return true;
        } else {
            throw error;
        }
    }
}


