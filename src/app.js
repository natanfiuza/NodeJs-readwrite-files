const express = require("express");
const WriteController = require("./controllers/write.controlle.js");
const ReadController = require("./controllers/read.controlle.js"); 

const app = express();

app.use(express.json());

app.post("/api/create", WriteController.execute);
app.get("/api/list", ReadController.execute);

module.exports = app;