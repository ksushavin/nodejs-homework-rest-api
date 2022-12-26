const app = require('./app')
const mongoose = require("mongoose");


require("dotenv").config();  //creat object from info from file .env and add it to process.env, до змінних оточення
const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log(`!!! Database connection successful. Use our API on port: ${PORT}!!!`)
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1)
  })

