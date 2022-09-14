const expressServer = require("express");
const employeeController = require("../controllers/employee-controller")
const router = expressServer.Router()

router.get('/get', employeeController.findEmployee)
router.get('/get/:id', employeeController.findEmployee)
router.put('/edit/:id', employeeController.editEmployee)
router.post('/post', employeeController.postEmployee)
router.delete('/delete/:id', employeeController.deleteEmployee)

module.exports = router 