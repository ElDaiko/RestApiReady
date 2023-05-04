const {Router} = require('express')
const userController = require('../controllers/userController')

const router = Router()

router.get('/', userController.userGet)

router.put('/:id', userController.userPut)  //: es para un parametro variable

router.post('/', userController.userPost)

router.delete('/', userController.userDelete)

router.patch('/', userController.userPatch)


module.exports = router