const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());


app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", "*")

  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")

  res.header("Access-Control-Allow-Headers", "Content-Type")

  app.use(cors())

  next()


})


// DB Connection
const conn = require("./db/conn")

conn()



// Routes
const routes = require("./routes/router")

app.use("/api", routes)

app.listen(5173, function () {
  console.log("Servidor Online!");
});

