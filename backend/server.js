const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/articleSchema");
const cors = require("cors");
const bodyParser = require ('body-parser')
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running");
  console.log("API is running ok");
});

app.get("/api", async (req, res) => {

  try {

    const ali = await Article.find({})

    res.send({ data: ali })

  } catch (error) {

  }
})


app.get("/api/:id", async (req, res) => {

  try {

    const ali = await Article.findById(req.params.id)

    res.send({ data: ali })
    res.render({objarticle:ali})

  } catch (error) {

  }
})






app.post("/post", async (req, res) => {
  
try {
  const product =  await Article.create(req.body)
res.status(200).json(product)
} catch (err) {
  console.log(err.message)
  res.json({message:err.message})
}
})












mongoose.connect(
  "mongodb://shehab:1234@ac-smhji2v-shard-00-00.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-01.kiiwcap.mongodb.net:27017,ac-smhji2v-shard-00-02.kiiwcap.mongodb.net:27017/all_data?ssl=true&replicaSet=atlas-jilp6g-shard-0&authSource=admin&retryWrites=true&w=majority"
)
  .then(() => {
    console.log("Connected to mongodb successfully");

    app.listen(8080, () => {
      console.log(`server started on port 8080"`);
    });
  })
  .catch((err) => {
    console.log(err);
  });



