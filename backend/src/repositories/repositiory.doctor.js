import { query } from "../database/sqlite.js"

async function getAll(name) {
    let filter = []
    
    let sql = "SELECT * FROM doctors ";
    if(name) {
        filter.push("%" + name + "%")
        sql += "WHERE name LIKE ?";
    }
    sql += " ORDER BY name";
    const doctors = await query(sql, filter);
    return doctors;
}


async function insert(name, specialty, icon) {
    let sql = "INSERT INTO doctors(name, specialty, icon) VALUES(?, ?, ?) RETURNING id";
    
    const doctor = await query(sql, [name, specialty, icon]);

    return doctor[0];
}

export default { getAll, insert }