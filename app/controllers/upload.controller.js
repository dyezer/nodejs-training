const files = require('../middlewares/upload.middleware')

/*
export const getUpload = (req, res) => {
  //res.send('upload: ' + files.storage())
  //res.send('sa')
  res.sendFile(process.env.PWD + '/app/views/upload.html')
}

export const postUpload = (req, res) => {
  //res.send(JSON.stringify(req.body))
  console.log('Body- ' + JSON.stringify(res.body))
  console.log('post')
  res.send('post')
}
*/

module.exports = {
  getUpload: (req, res) => {
    res.sendFile(process.env.PWD + '/app/views/upload.html')
  },

  postUpload: (req, res) => {
    console.log('Body- ' + JSON.stringify(res.body))
    console.log('post')
    res.send('post')
  }
}
