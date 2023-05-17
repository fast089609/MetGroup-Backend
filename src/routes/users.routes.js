import { Router } from 'express'
import { login, create } from '../controllers/usuarioController.js'

const router = Router()

router.post('/login', login)
router.post('/users', create)

export default router