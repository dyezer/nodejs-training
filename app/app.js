const express = require('express')
const app = express()

/* use modules */
//import myModules from './exx/use-modules/'
//myModules.useModules()

/* routes */
app.use('/', require('./routes'))
app.use('/upload', require('./routes/upload'))

export default app
