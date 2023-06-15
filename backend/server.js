const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/articleSchema");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(5000, () => {
  console.log(`server started on port 5000"`);


app.get("/", (req, res) => {
  res.send("API is running");
  console.log("API is running ok")

});




mongoose.connect("mongodb://shehab:1234@ac-smhji2v-shard-00-00.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-01.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-02.kiiwcap.mongodb.net:27017/Article?ssl=true&replicaSet=atlas-jilp6g-shard-0&authSource=admin&retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to mongodb successfully");
  
      
      
    });
  })



app.get("/api", async(req, res)=>{
try {
  const products = await Article.find({title:"red"})
  res.json(products)
  console.log()
} catch (error) {
  res.json({message:error.message})
}



})



