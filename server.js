const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require ('dotenv').config();

const stripe = require('stripe')(proceess.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// requests bodies are converted to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// allows making requests between different origins
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  // __dirname is current directory
  app.use(express.static(path.join(__dirname, 'client/build')));

  // GET request from any URL sends app
  app.get('*', function(req, res) {
    res.sendFiles(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, error => {
  if(error) throw error;
  console.log('Server running on port ' + port)
})

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  // request to Stripe and redirect stripe error to GET '/payment' responce
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.starus(500).send({ error: stripeErr })
    } else {
      res.starus(200).send({ success: stripeRes })
    }
  })

})