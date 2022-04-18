const express = require("express");
const app = express();
// const mongoose = require('mongoose')
const { MongoClient } = require("mongodb");
const uri =
  "mongodb://admin:FKRv1ILQOoBGwSoY@cluster0-shard-00-00.0q7qb.mongodb.net:27017,cluster0-shard-00-01.0q7qb.mongodb.net:27017,cluster0-shard-00-02.0q7qb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-73m3dy-shard-0&authSource=admin&retryWrites=true&w=majority";
const dbName = "binar";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((error, client) => {
  if (error) {
    return console.log("Gagal");
  }
  app.listen(8080, () => console.log(`Connected to database!`));
  const db = client.db(dbName);
  app.get("/api/v1/", (req, res) => {
    console.log(db.collection("cars").find());
  });
});

app.post("/api/v1", function (req, res) {
  res.send("Input");
});

app.get("/api/v1/:id", (req, res) => {
  res.send("Search Result");
});

app.put("/api/v1/:id", (req, res) => {
  res.send("Edit");
});

app.delete("/api/v1/:id", (req, res) => {
  res.send("Delete");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(res.render);
});

// mongoose
//   .connect(uri)
//   .then(() => {
//     app.listen(8080, () => console.log(`Connected to database!`));
//   })
//   .catch((err) => console.log(err));
