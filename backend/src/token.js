import jwt from "jsonwebtoken";

const secretKey = "SenhaQueDeveriaEstarNaENV"

function generateToken(id) {
    const token = jwt.sign({id}, secretKey, {
        expiresIn: 365
    });

    return token;
}


function validateToken(req, res, next) {
    const requestToken = req.headers.authorization;

    if(!requestToken) {
        return res.status(401).json({ error: "Token não informado" });
    }
    
    const [bearer, token] = requestToken.split(" ");
    
    return jwt.verify(token, secretKey, (err, decodedToken) => {
        if(err) {
            return res.status(401).json({ error: "Token inválido" });
        }

        req.id = decodedToken.id;
        
        next();
    });
}

export default { generateToken, validateToken };