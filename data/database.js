const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let mongoDbUrl = "mongodb://127.0.0.1:27017";
let database;
if (process.env.MONGODB_URL) {
  mongoDbUrl = process.env.MONGODB_URL;
}
async function connectToDatabase() {
  const client = await MongoClient.connect(mongoDbUrl);
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
