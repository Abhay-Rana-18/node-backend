import express from "express";
const port = 3000;
const app = express();

app.route("/").get((req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
