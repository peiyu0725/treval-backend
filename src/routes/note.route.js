import { Router } from 'express'
import note from '../controllers/note.controller.js'
var router = Router();

router.route('/')
    .get(note.list)
    .post(note.add)

router.route('/:id')
    .get(note.get)

export default router