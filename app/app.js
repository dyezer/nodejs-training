const express = require('express')
const app = express()

import myModules from './exx/use-modules/index'
myModules.useModules()

app.get('/', (req, res) => {
  res.send('hi!express')
})

export default app
