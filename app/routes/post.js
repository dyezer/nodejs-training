const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
  res.sendFile(process.env.PWD + '/app/views/post.html')
})

/* must to use urlencoded parser */
// v1: const urlencodedParser = express.urlencoded({ extended: false })
// v2: to app.js add -> app.use(express.urlencoded({ extended: false }))

// 1: router.post('/post', urlencodedParser, (req, res) => {
router.post('', (req, res) => {
  if (!req.body) return response.sendStatus(400)
  console.log(req.body)
  res.send(req.body)
})

module.exports = router
