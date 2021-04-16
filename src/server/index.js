const dotenv = require("dotenv");
dotenv.config();
const mockAPIResponse = require("./mockAPI.js");
const PORT = 8081;
const axios = require("axios");

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/*Dependencies*/
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

app.post("/add", async (req, res) => {
  try {
    const url = req.body.url;

    apiKey = process.env.API_KEY;
    const apiResponse = await axios.get(
      `${baseURL}?key=${apiKey}&url=${url}&lang=en`
    );

    const {
      text,
      agreement,
      subjectivity,
      confidence,
      irony,
      score_tag,
    } = apiResponse.data;
    res.send({
      text,
      agreement,
      subjectivity,
      confidence,
      irony,
      score_tag,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});

module.exports = { app };
