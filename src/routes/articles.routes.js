import { Router } from 'express'
import { create, index, show, destroy, update } from '../controllers/articuloController.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = Router()

router.get('/articulo', checkAuth, index)
router.get('/articulo/:id', checkAuth, show)
router.post('/articulo', checkAuth, create)
router.put('/articulo/:id', checkAuth, update)
router.delete('/articulo/:id', checkAuth, destroy)

export default router