const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(formidable());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
