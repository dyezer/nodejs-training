const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('upload')
})

router.get('/show', (req, res) => {
  res.send('show-upload')
})

module.exports = router
