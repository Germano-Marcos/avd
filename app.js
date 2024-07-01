const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());



// DB Connection
const conn = require("./db/conn")

conn()

app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", "*")

  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")

  res.header("Access-Control-Allow-Headers", "Content-Type")

  app.use(cors())

  next()


})

// Routes
const routes = require("./routes/router")

app.use("/api", routes)

app.listen(3000, function () {
  console.log("Servidor Online!");
});

