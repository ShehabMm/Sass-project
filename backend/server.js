const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/articleSchema");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
  console.log("API is running ok");
});

mongoose.connect(
    "mongodb://shehab:1234@ac-smhji2v-shard-00-00.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-01.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-02.kiiwcap.mongodb.net:27017/all_data?ssl=true&replicaSet=atlas-jilp6g-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected to mongodb successfully");

    app.listen(5000, () => {
      console.log(`server started on port 5000"`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app. get("/api", async(req, res) => {
  await  Article.find().then((result) => {

console.log(result)


    });
  })
  
