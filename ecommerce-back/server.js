const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51HAI24I70T80NG68GZFZlla93XJZtE94avEOEXqUeLMqb6YVj3Kly5FiNZ6EK3dZrDuniS5hl6LgiADwfCM8dAkn00RA0KThh4"
);
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../ecommerce-front/build")));
  app.get("*", function (req, res) {
    res.sendFile(
      path.join(__dirname, "../ecommerce-front/build", "index.html")
    );
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("server running on port" + port);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
