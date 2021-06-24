const axios = require('axios')

module.exports.all = async (req,res) => {

  console.log(req.body)

  var body = (req.body)? JSON.parse(req.body) : {}

  console.log(Object.keys(body))

  var email = req.params.email || body.email || 'email.missing@example.com'
  var key = process.env.cyclic_app_env_API_KEY || body.apiKey
  
  if (key === undefined) {
    res.body = {"msg":"Define a body with a valid 'apiKey' value or an 'API_KEY' environment variable"}
    return
  }

  var response = await axios.get(`https://ipqualityscore.com/api/json/email/${key}/${email}`)
  console.log(response.data);

  res.set('Content-Type','application/json')
  res.body = response.data
}
