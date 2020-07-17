// eslint-disable no-console
// eslint-disable no-alert
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const onToken = (token) => {
  console.log(token);
  alert('Payment Successful');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H1c5HJAOFSPTkQHGqwAC9jcLxtuPgcfw4URfZkmxB8MlXfW3Pj21iV3GPCWdB2edpkSVoi5hd1R5L8Oy2xfJlZo00FqBsngX5';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please make sure you use provided credit card!'
      );
    });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Arctic Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Mf2.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
