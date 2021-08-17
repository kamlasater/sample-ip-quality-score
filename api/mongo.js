
require('dotenv').config()

const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
// console.log(uri)

module.exports.all = async (req,res) => {

  var dbs = await connect()
  res.set('Content-Type','application/json')
  res.body = JSON.stringify(dbs,null,2)
}

async function connect() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  await client.connect();
  var dbs = await listDatabases(client);
  client.close()
  return dbs
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports.connect = connect
