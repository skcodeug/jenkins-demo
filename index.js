var express = require("express");
var app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World <br> Hello World Two <br> Hello World 36");
});

app.listen(port);
