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


async function edit(id, name, specialty, icon) {
    let sql = "UPDATE doctors SET name=?, specialty=?, icon=? WHERE id=?";
    
    await query(sql, [name, specialty, icon, id]);

    return id;
}


async function exclude(id) {
    let sql = "DELETE FROM doctors WHERE id=?";
    
    await query(sql, [id]);

    return id;
}


export default { getAll, insert, edit, exclude }