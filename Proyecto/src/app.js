const express = require("express");

const port = 3000;
const app = express();

app.use(express.static(__dirname + "/public"));

// Template engine configuration
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Routes
app.use(require("./routes/routes.js"));

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

console.log("Server listening on port " + port);

app.listen(port);
