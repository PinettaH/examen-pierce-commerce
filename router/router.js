import { Router } from "express";
import { statsPatron, validatePatron } from "../controllers/adn.controller.js";

export const router = Router();

router.post('/validate', validatePatron);
router.get('/stats', statsPatron);