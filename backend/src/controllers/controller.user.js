import serviceUser from "../services/service.user.js";


async function insert(req, res) {
    const { name, email, password } = req.body;
    
    const user = await serviceUser.insert(name, email, password);
    
    res.status(201).json(user);
}


async function login(req, res) {
    const { email, password } = req.body;
    
    const user = await serviceUser.login(email, password);
    
    if(user.length == 0) {
        res.status(401).json({error: "E-mail ou senha inválida"});
    }
    else {
        res.status(200).json(user);
    }
}


export default { insert, login }