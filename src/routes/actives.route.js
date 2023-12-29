import { Router } from 'express'
import actives from '../controllers/actives.controller.js'
var router = Router();

router.route('/')
    .get(actives.list)
    .post(actives.add)

router.route('/:id')
    .get(actives.get)

export default router