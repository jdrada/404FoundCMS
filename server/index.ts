import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
