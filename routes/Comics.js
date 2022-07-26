const express = require("express");
const axios = require("axios");
const router = express.Router();

// Search all comics

router.get("/comics/:skip", async (req, res) => {
  try {
    console.log("route /comics");

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?limit=28&skip=${req.params.skip}&apiKey=${process.env.API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

// Search a comic by id

router.get("/comics/id/:id", async (req, res) => {
  try {
    console.log("route /comics/:id");

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

// Search a comic by name

router.get("/comics/title/:title/:skip", async (req, res) => {
  try {
    console.log("route /comics/title/:title");

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?title=${req.params.title}&limit=28&skip=${req.params.skip}&apiKey=${process.env.API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
