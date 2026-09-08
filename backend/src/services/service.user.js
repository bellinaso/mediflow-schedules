import repositioryUser from "../repositories/repositiory.user.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";


async function insert(name, email, password) {
    const hashPassword = await bcrypt.hash(password, 10);
    
    const user = await repositioryUser.insert(name, email, hashPassword);

    user.token = jwt.generateToken(user.id);
    
    return user;
}


async function login(email, password) {
    
    const user = await repositioryUser.findByEmail(email);

    if(user.length == 0) {
        return [];
    }
    else {
        if(await bcrypt.compare(password, user.password)) {
            delete user.password

            user.token = jwt.generateToken(user.id);

            return user;
        }
        else {
            return [];
        }
    }
    
}


export default { insert, login }