import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HAI24I70T80NG68qWgiimImv676S6lMlahLah8YYLhHoJ4IJjWG2ZeXltJ1hbZeu0POghmN4VP94giJVr6I2LrV005tWgXEVm";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("payment success");
      })
      .catch((error) => {
        console.log("payment error", error);
        alert("There was an issue with payment");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="PepeClownStore"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
