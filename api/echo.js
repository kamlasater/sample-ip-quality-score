

module.exports.all = async (req,res) => {
  res.body = {headers: req.headers, env: process.env}
}
