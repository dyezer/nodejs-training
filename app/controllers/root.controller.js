export const showPage = (req, res) => {
  res.send(req.url + ' : ' + req.params.page)
}
