import serviceDoctor from "../services/service.doctor.js";

async function getAll(req, res) {
    const name  = req.query.name;
    
    const doctors = await serviceDoctor.getAll(name);
    
    res.status(200).json(doctors);
}


async function insert(req, res) {
    // const name  = req.body.name;
    // const specialty  = req.body.specialty;
    // const icon  = req.body.icon;

    const {name, specialty, icon} = req.body;
    
    const doctor = await serviceDoctor.insert(name, specialty, icon);
    
    res.status(201).json(doctor);
}


async function edit(req, res) {
    const id = req.params.id;
    const { name, specialty, icon } = req.body;
    
    const doctor = await serviceDoctor.edit(id, name, specialty, icon);
    
    res.status(200).json(doctor);
}


async function exclude(req, res) {
    const id = req.params.id;
    
    const doctor = await serviceDoctor.exclude(id);
    
    res.status(200).json(doctor);
}


async function getServices(req, res) {
    const id  = req.params.id;
    
    const services = await serviceDoctor.getServices(id);
    
    res.status(200).json(services);
}


export default { getAll, insert, edit, exclude, getServices }