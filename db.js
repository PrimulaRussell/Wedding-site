const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')

mongodb.connect(process.env.CONNECTIONSTRING, {useUnifiedTopology: true }, async (err, client) => {
const db = client.db();
const results = await db.collection("Users").toArray()
console.log(results);
})