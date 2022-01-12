const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/home", async (req, res) => {
  try {
    console.log("route /home");

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
