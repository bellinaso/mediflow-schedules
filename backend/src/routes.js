import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import jwt from "./token.js";

const router = Router();

// Doctors
router.get("/doctors", jwt.validateToken, controllerDoctor.getAll);
router.post("/doctors", jwt.validateToken, controllerDoctor.insert);
router.put("/doctors/:id", jwt.validateToken, controllerDoctor.edit);
router.delete("/doctors/:id", jwt.validateToken, controllerDoctor.exclude);
// Services
router.get("/doctors/:id/services", jwt.validateToken, controllerDoctor.getServices);

// Users
router.post("/users/register", controllerUser.insert);
router.post("/users/login", controllerUser.login);

// Appointments


export default router;