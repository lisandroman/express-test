require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const app = express();

app.use(cors());
app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Api is running...", PORT));
