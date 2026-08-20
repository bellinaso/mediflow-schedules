import serviceDoctor from "../services/service.doctor.js";

async function getAll(req, res) {
    const name  = req.query.name;
    
    const doctors = await serviceDoctor.getAll(name);
    
    res.status(200).send(doctors);
}


async function insert(req, res) {
    // const name  = req.body.name;
    // const specialty  = req.body.specialty;
    // const icon  = req.body.icon;

    const {name, specialty, icon} = req.body;
    
    const doctor = await serviceDoctor.insert(name, specialty, icon);
    
    res.status(201).send(doctor);
}

export default { getAll, insert }