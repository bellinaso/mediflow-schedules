import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";

const router = Router();

// Doctors
router.get("/doctors", controllerDoctor.getAll);
router.post("/doctors", controllerDoctor.insert);
router.put("/doctors/:id", controllerDoctor.edit);
router.delete("/doctors/:id", controllerDoctor.exclude);

// Users
router.post("/users/register", controllerUser.insert);

// Appointments

// Services

export default router;