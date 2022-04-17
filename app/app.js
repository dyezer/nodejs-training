const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.locals.baseURL = __dirname
  next()
})


/* use modules */
//import myModules from './exx/use-modules/'
//myModules.useModules()

/* routes */
app.use('/upload', require('./routes/upload'))
app.use('/', require('./routes'))

export default app
