const express = require("express");
const app = express();
app.use("/", (req, res) => {
  res.send("Hello World");
});

app.use("/hello", (req, res) => {
  res.send("HELLO HELLO HELLO");
});

app.use("/test", (req, res) => {
  res.send("HELLO from the server");
});

app.listen(7777, () => {
  console.log("SERVER RUNNING ON PORT 7777");
});
