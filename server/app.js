const express = require("express");
const app = express();

// Route
app.get("/", (req, res) => {
  res.send("Hello TODO LIST PROJECT!");
});

app.get("/blog", (req, res) => {
  res.send("This is a Blog");
});
// app.post("/", (req, res) => {
//   res.send("Got a POST request")
// });

// app.put("/user" , (req, res) => {
//    res.send("Got PUT request at /user")
// })

// app.delete ('/user', (req, res) +>{
//    res.send ("Got to DELTE this user")
// })

module.exports = app;
