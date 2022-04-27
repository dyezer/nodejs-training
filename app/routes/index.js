const express = require('express')

const router = express.Router()

const rootController = require('../controllers/root.controller')

// text response
router.get('/', (req, res) => {
  res.send('hi')
})

// use controller
router.get('/:page', rootController.showPage)

module.exports = router
