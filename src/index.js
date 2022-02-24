const express = require("express");

const app = express();

app.use(express.json());

const connect = require("./configs/db");
// const searchController = require("./controllers/search.controller");

const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");

// app.post("/search", searchController);

app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
