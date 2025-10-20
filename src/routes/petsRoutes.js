import { Router } from "express";
import * as PetsController from './../controllers/petsController.js'

const router = Router();

router.get("/", PetsController.listarTodos);
router.get("/:id", PetsController.listarUm)




export default router;