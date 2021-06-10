module.exports = (req, res, next) => {
  res.header('Content-Range', 'dbclientlist 0-20/20')
  next()
}
