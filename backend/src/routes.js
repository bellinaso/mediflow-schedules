import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";

const router = Router();

// Doctors
router.get("/doctors", controllerDoctor.getAll);
router.post("/doctors", controllerDoctor.insert);

// Users

// Appointments

// Services

export default router;