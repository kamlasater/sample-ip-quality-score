const axios = require('axios')

module.exports.all = (req,res) => {

  console.log(req.body)

  var e = req.body['email']
  var a = req.body['apiKey']

  (async (em,ak) => {
    console.log(em,ak)
    var response = await axios.get(`https://ipqualityscore.com/api/json/email/${ak}/${em}`)
    console.log(response);
    res.json(req.body)
    // res.json(response.body)
    // res.status = response.status
  })(e,a)

  console.trace()
  console.log('test')
}
