const { MongoClient } = require("mongodb");
const products =require('../product') 

async function connection() {
  const uri =
    "mongodb+srv://afeesmuhammad703:ecart@cluster0.s8lng2i.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    client.connect();

    const product = await products;

    const result = await client.db("shopping").collection("product").insertOne(product);

    if (result) {
      console.log(`product inserted successfully ${result.insertedId}`);
    }
  } catch (error) {
    console.log("an error in connecting mongodb");
    console.error(error);
  } finally {
    client.close();
  }
}

connection();
