import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  // eslint-disable-next-line no-console
  console.log(token);
  // eslint-disable-next-line no-alert
  alert('Payment Successful');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H1c5HJAOFSPTkQHGqwAC9jcLxtuPgcfw4URfZkmxB8MlXfW3Pj21iV3GPCWdB2edpkSVoi5hd1R5L8Oy2xfJlZo00FqBsngX5';

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
