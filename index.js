const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(formidable());
app.use(cors());

const Character = require("./routes/Character.js");
app.use(Character);

const Comics = require("./routes/Comics.js");
app.use(Comics);

const ComicsId = require("./routes/ComicsId");
app.use(ComicsId);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
