import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from '../repository/prisma'

const access_token_secret =  process.env.ACCESS_TOKEN_SECRET ?? ''
const refresh_token_secret = process.env.REFRESH_TOKEN_SECRET ?? ''

export type loginResponse = { accessToken:string, refreshToken:string}

export const login = async (email: string, password: string): Promise<loginResponse> =>{ 
    try {
        const user = await prisma().usuarios.findUnique({ where: { email: email } });
        
        if (user === null) {
            throw new Error("User not found");
        }
        
        const result = await bcrypt.compare(password, user.password);
        
        if (result) {
            const accessToken = jwt.sign(
                { email: email, role: "USER" },
                access_token_secret,
                {
                expiresIn: "1h",
                }
            );
        
            const refreshToken = jwt.sign({ email: email }, refresh_token_secret, {
                expiresIn: "72h",
            });
            return { accessToken: accessToken, refreshToken: refreshToken };
        }
        throw new Error("Invalid password");
    } catch (err) {
        throw err;
    }
}

export const register = async (email: string, password: string): Promise<any> => {
    const hash = await bcrypt.hash(password, 10);
    
    try {
        const user = await prisma().usuarios.create({
            data: {
                email: email,
                password: hash,
            },
        });
        return user
    } catch (err) {
        throw err
    }
}