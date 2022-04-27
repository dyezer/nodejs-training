const express = require('express')
const router = express.Router()
const test = require('../middlewares/test.middleware.js')

router.get('/', (req, res) => {
  res.send(test.hi())
})

router.post('/', () => {
  res.send('to do it!')
})

module.exports = router
