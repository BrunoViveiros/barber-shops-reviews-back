const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("ok");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
