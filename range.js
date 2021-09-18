module.exports = (req, res, next) => {
  res.header('Content-Range', 'tradePartners_list 0-20/20')
  next()
}
