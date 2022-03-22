const port = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.listen(port, () => console.log(`server is running on port ${port}`));

app.use(cors());

app.get("/", (req, res) => {
  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/market/get-trending-tickers",
    params: { region: "US" },
    headers: {
      "x-rapidapi-host": "yh-finance.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  axios.request(options).then((response) => {
    res.json(response.data);
  });
});
