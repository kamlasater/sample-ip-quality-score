
require('dotenv').config()

const { MongoClient } = require('mongodb');

const uri = process.env.cyclic_app_env_MONGODB_URI;
// console.log(uri)


module.exports.get = async (req,res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  await client.connect();

  var id = req.params.id

  const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ _id: id });
  if (result) {
      console.log(`Found a listing in the collection with the id of '${id}':`);
      console.log(result);
  } else {
      console.log(`No listings found with the id '${id}'`);
  }

  res.set('Content-Type','application/json')
  res.body = {env: process.env, req: req, result: result}

}
