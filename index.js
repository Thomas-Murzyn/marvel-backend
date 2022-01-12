const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(formidable());
app.use(cors());

const Characters = require("./routes/Characters.js");
app.use(Characters);

const Comics = require("./routes/Comics.js");
app.use(Comics);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
