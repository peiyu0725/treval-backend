import { Router } from 'express'
import actives from '../controllers/actives.controller.js'
var router = Router();

router.route('/')
    .get(actives.list)
//.get('/:id', product.getItem)

export default router