const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarBD = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Base conectada");
  } catch (error) {
    console.log(error);
    // 1 detiene la ejecucion del servidor.
    process.exit(1);
  }
};

module.exports = conectarBD;
