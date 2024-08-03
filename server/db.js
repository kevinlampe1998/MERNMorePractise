
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin2:dci123@cluster0.fexnoc9.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin2:dci123@cluster0.fexnoc9.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

module.exports = connectDB;