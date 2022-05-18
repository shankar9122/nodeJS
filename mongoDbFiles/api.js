const express = require("express");
const app = express();
const dbConnection = require("./mongodb");
const mongodb = require("mongodb")

app.use(express.json())

app.get("/", async (req, resp) => {
    let data = await dbConnection();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
});

app.post("/", async (req, resp) => {
    let data = await dbConnection();
    let result  = await data.insert(req.body)
    resp.send(result)
});

app.put("/", async (req, resp) => {
    let data = await dbConnection();
    data = await data.updateOne({name: "shankar"}, {
        $set: req.body
    })
    resp.send(req.body)
});

app.delete("/", async (req, resp) => {
    let data = await dbConnection();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.body._id)})
    resp.send(result)
})

app.listen(4000);