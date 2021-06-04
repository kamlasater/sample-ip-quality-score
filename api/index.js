const axios = require('axios')

module.exports.all = async (req,res) => {

  console.log(req.body)

  var body = JSON.parse(req.body)

  console.log(Object.keys(body))

  var email = body.email
  // var a = req.body['apiKey']
  var key = body.apiKey

  var response = await axios.get(`https://ipqualityscore.com/api/json/email/${key}/${email}`)
  console.log(response.data);

  res.set('Content-Type','application/json')
  res.body = response.data
  return "test return value"
}
