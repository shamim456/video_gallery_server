const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello Shamim");
});

app.listen(process.env.PORT, () => {
  console.log("app runnings");
});
