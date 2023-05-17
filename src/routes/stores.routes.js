import { Router } from 'express'
import { create, show, index, destroy, update } from '../controllers/tiendasControler.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = Router()

router.get('/tiendas', checkAuth, index)
router.get('/tiendas/:id', checkAuth, show)
router.post('/tiendas',  checkAuth, create)
router.put('/tiendas/:id', checkAuth, update)
router.delete('/tiendas/:id', checkAuth, destroy)

export default router