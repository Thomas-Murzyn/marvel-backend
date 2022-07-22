const express = require("express");
const axios = require("axios");
const router = express.Router();

// Search all characters

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

// Search a character by name id

router.get("/character/:id", async (req, res) => {
  try {
    console.log("/character/:id");

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.id}?apiKey=${process.env.API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

// Search a character by name

router.get("/character/name/:name", async (req, res) => {
  try {
    console.log("/character/:name");
    console.log(req.params.name);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?name=${req.params.name}&apiKey=${process.env.API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
