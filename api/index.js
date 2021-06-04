const axios = require('axios')

module.exports.all = (req,res) => {

  console.log(req.body)
  console.log(Object.keys(req.body))

  var e = req.body['email']
  // var a = req.body['apiKey']
  var key = req.body.apiKey

  var r = (async (em,ak) => {
    console.log(em,ak)
    var response = await axios.get(`https://ipqualityscore.com/api/json/email/${ak}/${em}`)
    console.log(response);
    console.trace()
    // res.json(req.body)
    // res.json(response.body)
    // res.status = response.status
    return "this is the result"
  })(e,a)

  console.trace()
  console.log('test',r)
}
