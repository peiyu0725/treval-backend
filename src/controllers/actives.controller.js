import activesModel from '../models/actives.model.js'
import Debug from 'debug'
const debug = Debug('treval-backend:server')

async function list (req, res, next) {
  try {
    const items = activesModel.list()
    console.log(items)
    const data = items.map(item => {
      return {
        id: item.id,
        title: item.title
      }
    })
    res.json(items)
  } catch (error) {
    debug(error)
    next(error)
  }
}

// async function getItem (req, res, next) {
//   const id = req.params.id
//   menuCollection.find({ id: Number(id) }).limit(1).toArray(function (err, items) {
//     if (err) throw err;
//     if (items.length === 0) res.json({})
//     res.json({
//       id: items[0].id,
//       name: items[0].name,
//       imageId: items[0].imageId,
//     });
//   })
// }

export default { list }