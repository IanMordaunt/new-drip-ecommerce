const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order")

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });

  app.get("/api/test", ()=> {
      console.log("test is successful")
  })

app.use(express.json());

  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/products", productRoute);
  app.use("/api/carts", cartRouter);
  app.use("/api/orders", orderRouter);
  

app.listen(process.env.PORT  || 3001, () => {
  console.log("Backend server is running!");
});
