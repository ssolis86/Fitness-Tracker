const express = require("express");
const app = express();
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;


app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Connection to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

// routes
app.use(require("./routes"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});