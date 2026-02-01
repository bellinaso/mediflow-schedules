import repositioryDoctor from "../repositories/repositiory.doctor.js";

async function getAll() {

    const doctors = await repositioryDoctor.getAll();
    
    return doctors;
}

export default { getAll }