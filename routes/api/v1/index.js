var express = require('express');
var router = express.Router();
const Actives = require('./db').Actives

router.get('/initmenus', function (req, res, next) {
  let list = []
  const count = 20
  const min = 1
  const max = 1000

  for (let i = 1; i <= count; i++) {
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min
    list.push({
      id: i,
      imageId: randomId,
      name: `Image ${randomId}`
    })
  }

  // 寫入 DB
  const worker = (async function (data) {
    const result = await Actives.create(data);
    return result;
  })(list);

  worker.then(() => {
    res.json(list);
  }).catch(next);
});

module.exports = router;
