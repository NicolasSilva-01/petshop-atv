import { Router } from "express";
import * as PetController from './../controllers/petsController.js'

const router = Router();

router.get("/", PetController.listarTodos)
router.get("/:id", PetController.listarUm)
router.post("/", PetController.criar)
router.delete("/:id", PetController.apagar)
router.put("/:id", PetController.atualizar)


export default router;