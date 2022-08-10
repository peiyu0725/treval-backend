import { Router } from 'express'
import actives from '../controllers/actives.controller.js'
var router = Router();

router.route('/')
    .get(actives.list)

router.route('/:id')
    .get(actives.getItem)

export default router