const express = require('express');
const app = express();
require("./config");
const ProductModal = require("./products");

app.use(express.json())

app.post("/create", async (req, resp) => {
    let data = new ProductModal(req.body);
    let result = await data.save()
    console.log(result);
    resp.send("done")
});

// app.get("/get")


app.listen(4000)