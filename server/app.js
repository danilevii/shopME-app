require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const auth = require("./middleware/auth");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", require("./routes/auth"));

app.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome ");
})

module.exports = app;