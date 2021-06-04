const axios = require('axios')

module.exports.all = (req,res) => {

  console.log(req.body)

  var body = JSON.parse(req.body)

  console.log(Object.keys(body))

  var email = body['email']
  // var a = req.body['apiKey']
  var key = body.apiKey

  var r = (async (em,ak) => {
    console.log(em,ak)
    var response = await axios.get(`https://ipqualityscore.com/api/json/email/${ak}/${em}`)
    console.log(response);
    console.trace()
    // res.json(req.body)
    // res.json(response.body)
    // res.status = response.status
    return "this is the result"
  })(email,key)

  console.trace()
  console.log('test',r)
}
