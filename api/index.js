const axios =

exports.all = (req,res) => {

  const email = req.body['email']
  const apiKey = req.body['apiKey']

  axios.get(`https://ipqualityscore.com/api/json/email/${apiKey}/${email}`)
  .then((response) => {
    console.log(response);
    res.json(response.body)
    res.status = response.status
  }, (error) => {
    console.log(error);
  });
}
