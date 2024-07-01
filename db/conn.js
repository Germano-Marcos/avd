const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://germano:2VaXfjHDYwndPN9@cluster0.1futn48.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;

