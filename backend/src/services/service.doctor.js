import repositioryDoctor from "../repositories/repositiory.doctor.js";

async function getAll(name) {
    const doctors = await repositioryDoctor.getAll(name);
    
    return doctors;
}


async function insert(name, specialty, icon) {
    const doctor = await repositioryDoctor.insert(name, specialty, icon);
    
    return doctor;
}


async function edit(id, name, specialty, icon) {
    const doctor = await repositioryDoctor.edit(id, name, specialty, icon);
    
    return doctor;
}


async function exclude(id) {
    const doctor = await repositioryDoctor.exclude(id);
    
    return doctor;
}


export default { getAll, insert, edit, exclude }