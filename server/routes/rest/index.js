const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const md5 = x => crypto.createHash('md5').update(x, 'utf8').digest('hex');
// http://localhost:3000/api

router.get('/init', (req, res, next) => {
  const userToken = md5(`${Math.random()}`)
  res.cookie('userToken', userToken)
  const
    M = 10,
    N = 10,
    X = 10;
  let matr = [];
  for (let i = 0; i < M; i++) {
    let str = [];
    for (let j = 0; j < N; j++) {
      let item = {
        id: `${i}-${j}`,
        am: Math.floor(100 + Math.random()*(999 + 1 - 100))
      }
      str.push(item['am']);
    }
    matr.push(str);
  }
  console.table(matr);

  res.send('rest-helper');
});




module.exports = router;
