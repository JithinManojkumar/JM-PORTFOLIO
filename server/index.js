const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./database/user");

require("dotenv").config();

const port = process.env.PORT;
const DBUrl = process.env.DATABASE;

/* Connecting Database */

mongoose
  .connect(DBUrl)
  .then(() => {
    console.log("Database Connected Succesfully!");
  })
  .catch((err) => {
    "Database is not Connected!", err;
  });

app.use(cors());
app.use(express.json());

app.post("/api/post-data", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (name === "" || email === "" || message === "") {
      return res.json({
        status: "error",
        message: "Field should not be Empty!",
      });
    }

    const user = await User.create({
      Name: name,
      Email: email,
      Message: message,
    });

    return res.json({ status: "ok", message: "Message Sent!", data: user });
  } catch (err) {
    return res.json({ status: "error", error: err });
  }
});

app.listen(port, () => {
  console.log(`Server is Connected to the PORT ${port}`);
});
