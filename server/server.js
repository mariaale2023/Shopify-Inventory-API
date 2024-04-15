const mongoose = require("mongoose");
const port = 3000;
const { default: mongoose } = require("mongoose");
const app = require("./app");

app.listen(port, () => {
  console.log(`TODO List app listening on port ${port}`);
});
