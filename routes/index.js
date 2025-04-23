var express = require("express");
var router = express.Router();
module.exports = router;

const API_KEY = "2b34cdde0ef3cb1887045ee35f5b65e8";

router.get("/movies", async (req, res, next) => {
  const BASE_URL = "https://api.themoviedb.org/3";

  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    await res.json({ movies: data.results });
  } catch (error) {
    console.error("Erreur TMDb:", error.message);
  }
});
