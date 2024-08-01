const express = require("express");
const app = express();
const port = 3000;

console.log('Now the app is live')

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/webhook", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.listen(port, () => {
  console.log(`Example app is running on port ${port}`);
});
