const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("ok");
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(port);
});
