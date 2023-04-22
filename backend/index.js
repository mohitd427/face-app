const express = require("express");
require("dotenv").config();
const cors = require('cors')
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");

const app = express();
app.use(cors())
app.use(express.json());

app.get("/api", (req, res) => {
  res.send(`<h1>Face App</h1>`);
});

app.use("/users", userRouter);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error while connection");
    console.log(err);
  }
  console.log(`Running at port ${process.env.port}`);
});
