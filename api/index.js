const axios = require('axios')

exports.all = (req,res) => {

  const email = req.body['email']
  const apiKey = req.body['apiKey']

  var response = await axios.get(`https://ipqualityscore.com/api/json/email/${apiKey}/${email}`)

  console.log(response);
  res.json(response.body)
  res.status = response.status
}
