import noteModel from '../models/note.model.js'
import Debug from 'debug'
const debug = Debug('treval-backend:server')

async function list (req, res, next) {
  try {
    let items = await noteModel.list()
    items = items.map(item=> {
      item.tags = item.tags.split(',')
      return item
    })
    res.json(items)
  } catch (error) {
    debug(error)
    next(error)
  }
}

async function get (req, res, next) {
  try {
    const id = req.params.id
    let item = await noteModel.get(Number(id))
    if(!item) res.json(null)
    item.tags = item.tags.split(',')
    res.json(item)
  } catch (error) {
    debug(error)
    next(error)
  }
}

async function add(req, res, next) {
  try {
    await noteModel.add(req.body.data)
    res.json('ok')
  } catch (error) {
    debug(error)
    next(error)
  }
}

export default { list, get, add }