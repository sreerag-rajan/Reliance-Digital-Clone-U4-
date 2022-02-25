const path = require("path");
const express = require("express");

// const passport = require("./configs/google-oauth");
// const { newToken } = require("./controllers/auth.controller");

const app = express();

app.use(express.json());

const connect = require("./configs/db");
const searchController = require("./controllers/search.controller");
const productController = require("./controllers/product.controller");
const categoryController = require("./controllers/category.controller");
const imagesController = require("./controllers/images.controller");
const productrowController = require("./controllers/productrow.controller");

// routes 
const cartRoutes = require("./routes/cart");


app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.set("view engine", "ejs");

const userController = require("./controllers/user.controller");
const authController = require("./controllers/auth.controller");

app.get("",(req,res)=>{
  if(req.header.Authorization){
    console.log(req.header.Authorization);
  }
  return res.render("index.ejs");
})
app.use("/search",searchController);

app.use("/product", productController);
app.use("/category", categoryController);
app.use("/images", imagesController);
app.use("/productrow", productrowController);

app.use("/cart", cartRoutes);

app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/auth/google/failure",
//   }),
//   (req, res) => {
//     const { user } = req;
//     const token = newToken(user);

//     return res.send({ user, token });
//   }
// );

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
