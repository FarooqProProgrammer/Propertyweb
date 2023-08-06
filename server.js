require("dotenv").config();
const express = require("express");
const stripe = require("stripe")("pk_test_51NZthDJb9Gng9KkEwwzmWF8WgS4qz7Tm5iJBfvEKYOQnLjsFvAdXlo5kgB2o9AbM74cl3NXIxw2Fn2yNvqXB4REG009JWlKgO1");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Stripe Controller

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Broker Subscription",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      payment: "Successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      payment: "Failed",
      success: false,
    });
  }
});

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "files", "build")));
  res.sendFile(path.resolve(__dirname, "files", "build", "index.html"));
});

app.listen(4000, () => console.log("Server listening on PORT 4000"));
