import { Router } from "express";
import { createData, deleteData, fecthData, updateData } from "../controllers/todos";

const router = Router()

router.get('/', fecthData)

router.post('/todo', createData)

router.put('/todo/:todoId', updateData)

router.delete('/todo/:todoId', deleteData)

export default router