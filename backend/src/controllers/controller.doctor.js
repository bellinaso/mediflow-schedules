import serviceDoctor from "../services/service.doctor.js";

async function getAll(req, res) {
    const doctors = await serviceDoctor.getAll();
    
    res.status(200).send(doctors);
}

export default { getAll }