
require('dotenv').config()

const { MongoClient } = require('mongodb');

const uri = process.env.cyclic_app_env_MONGODB_URI;
// console.log(uri)


module.exports.get = async (req,res) => {

  res.set('Content-Type','application/json')
  res.body = {env: process.env, req: req}
  // const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });
  // if (result) {
  //     console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
  //     console.log(result);
  // } else {
  //     console.log(`No listings found with the name '${nameOfListing}'`);
  // }
}
