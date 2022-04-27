const express = require('express')
const app = express()

app.use(express.static('app/public'))
app.use(express.urlencoded({ extended: false })) // parser v2 use urlencoded middleware

/* use modules */
//import myModules from './exx/use-modules/'
//myModules.useModules()

/* routes */
app.use('/post', require('./routes/post'))
app.use('/middleware', require('./routes/middleware.route'))
app.use('/upload', require('./routes/upload'))
app.use('/', require('./routes'))

export default app
