const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// request parser
app.use(express.json());

//config cors
app.use(cors());

// routing setup
app.get("/", (req, res) => {
  res.send("hello Shamim");
});

app.listen(process.env.PORT, () => {
  console.log("app runnings");
});
