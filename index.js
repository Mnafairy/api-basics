// //module bichiglel
// import something from "somewhere";
// //commonJS -old
// const something = require("somewhere");
// // its the same thing different style of typing
const express = require("express");
const app = express();
const { products, users } = require("./dummy.json");

app.get("/products", (req, res) => {
  res.type = "application/json";
  res.send({ products });
});
app.get("/users", (req, res) => {
  res.type = "application/json";
  res.send({ users: users });
});
app.get("/usernames", (req, res) => {
  res.type = "application/json";
  const username = [
    ...products.map((e) => e.name),
    ...users.map((e) => e.name),
  ];
  res.send({ username });
  console.log(username);
});
app.listen(3001, () => {
  console.log("server is listening");
});
