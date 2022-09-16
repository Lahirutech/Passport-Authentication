import express from "express";
import * as employeeController from "../controllers/employee-controller"
const router = express.Router()

router.get('/get', employeeController.findEmployee)
router.get('/get/:id', employeeController.findEmployee)
router.put('/edit/:id', employeeController.editEmployee)
router.post('/post', employeeController.postEmployee)
router.delete('/delete/:id', employeeController.deleteEmployee)

module.exports = router 