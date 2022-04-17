const express = require('express')
const app = express()

/* use modules */
//import myModules from './exx/use-modules/'
//myModules.useModules()

/* routes */
app.use('/upload', require('./routes/upload'))
app.use('/', require('./routes'))

export default app
