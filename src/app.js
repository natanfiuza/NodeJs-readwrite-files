const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const showdown = require("showdown");
const { readFileSync } = require("fs");
const routerUser = require("../src/routes/user");


app.use(bodyParser.json());

app.use("/user", routerUser);

app.get("/help", function (req, res) {
  const dataRead = readFileSync("README.md").toString("utf8");
  converter = new showdown.Converter();
  res.type("text/html");
  res.send(converter.makeHtml(dataRead));
});
module.exports = app;
