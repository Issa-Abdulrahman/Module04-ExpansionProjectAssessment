import { Jwt } from "jsonwebtoken";
import dotenv from 'dotenv';
import user from "../models/user.js";

dotenv.config()

const secret = `${process.env.JWT_SECRET}`;

export const generateToken =(user) => {
    return jwt.sign(
        {
            id: user.id,
            firstname: user.firstname,
            email: user.email,
            role: user.role
        },
        secret, { expiresIn: '24h' });
    
}

export const verifyToken = (token) => {
    return jwt.verify(token, secret);
};