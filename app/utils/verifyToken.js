import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
};
