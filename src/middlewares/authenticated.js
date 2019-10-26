import jwt from 'jsonwebtoken';
import env from "../env";

const authenticated = (req, res, next) => {
    const token = req.headers['authorization'];
    jwt.verify(token, env.APP_KEY, (err, decode) => {
        if (err) {
            res.json("Token not provided")
        } else {
            next()
        }
    });
};

export default authenticated;
