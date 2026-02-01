import { query } from "../database/sqlite.js"

async function getAll() {

    let sql = "SELECT * FROM doctors ORDER BY name";
    // Simula o banco
    const doctors = query(sql);
    return doctors;
}

export default { getAll }