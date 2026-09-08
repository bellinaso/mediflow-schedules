import { query } from "../database/sqlite.js"


async function insert(name, email, password) {
    let sql = "INSERT INTO users(name, email, password) VALUES(?, ?, ?) RETURNING id";
    
    const user = await query(sql, [name, email, password]);

    return user[0];
}


async function findByEmail(email) {
    let sql = "SELECT * FROM users WHERE email=?";
    
    const user = await query(sql, [email]);
    
    if(user.length == 0) {
        return [];
    }
    else {
        return user[0];
    }
}


export default { insert, findByEmail }