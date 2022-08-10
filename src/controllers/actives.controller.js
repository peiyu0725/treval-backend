import activesModel from '../models/actives.model.js'
import Debug from 'debug'
const debug = Debug('treval-backend:server')

async function list (req, res, next) {
  try {
    let items = await activesModel.list()
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

async function getItem (req, res, next) {
  try {
    const id = req.params.id
    let item = await activesModel.get(Number(id))
    if(!item) res.json(null)
    item.tags = item.tags.split(',')
    res.json(item)
  } catch (error) {
    debug(error)
    next(error)
  }
}

export default { list, getItem }