export const showPage = (req, res) => {
  //res.send(req.url + ' : ' + req.params.page)
  res.sendFile(res.locals.baseURL + '/views/index.html')
}
