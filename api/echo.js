module.exports.all = async (req,res) => {
  res.set('Content-Type','application/json')
  res.body = {headers: req.headers, env: process.env}
}
