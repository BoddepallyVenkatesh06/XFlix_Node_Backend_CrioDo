const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middlewares/error");
const videoRoutes = require("./routes/v1/index");

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use("/v1", videoRoutes);
app.use(errorHandler);

module.exports = app;
