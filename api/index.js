const axios = require('axios')

exports.all = (req,res) => {

  console.log(req.body)

  const email = req.body['email']
  const apiKey = req.body['apiKey']

  (async (email,apiKey) => {
    var response = await axios.get(`https://ipqualityscore.com/api/json/email/${apiKey}/${email}`)
    console.log(response);
    res.json(req.body)
    // res.json(response.body)
    // res.status = response.status
  })(email,apiKey);

}
