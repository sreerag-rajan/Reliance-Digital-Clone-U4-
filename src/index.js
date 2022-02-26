const path = require("path");

const express = require("express");
const cookieParser = require("cookie-parser");

const passport = require("./configs/google-oauth");
const { newToken } = require("./controllers/auth.controller");

const app = express();

app.use(express.json());
app.use(cookieParser());

const connect = require("./configs/db");
const searchController = require("./controllers/search.controller");
const productController = require("./controllers/product.controller");
const categoryController = require("./controllers/category.controller");
const imagesController = require("./controllers/images.controller");

const productrowController = require("./controllers/productrow.controller");

// routes
const cartcontroller = require("./controllers/cart.controller");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.set("view engine", "ejs");

const userController = require("./controllers/user.controller");
const { router: authController } = require("./controllers/auth.controller");

app.get("", (req, res) => {
  return res.render("index.ejs");
});
app.use("/search", searchController);

app.use("/product", productController);
app.use("/category", categoryController);
app.use("/images", imagesController);
app.use("/productrow", productrowController);

app.use("/cart", cartcontroller);

app.use("/auth", authController);

app.use("/users", userController);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    const { user } = req;
    const token = newToken(user);
    res.cookie("Authorization", `Bearer ${token}`);
    res.redirect("/cart");
  }
);

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
