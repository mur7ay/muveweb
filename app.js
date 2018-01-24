const express = require('express');
const keys = require('./config/keys');
const stripe = require('stripe')('sk_test_LZJGwg1WdZXEKRig7xEMM2eC');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static('public'));

// Index route
app.get('/', (req, res) => {
  res.send();
});

// charge route
app.post('/charge', (req, res) => {
  // const amount = 2500;
  const amount = req.body.totalAmount;

  stripe.customers.create({
    email: "random-email@gmail.com",
    source: req.body.mytoken
  })
  .then(customer =>  {
    stripe.charges.create({
    amount,
    description:'Muve deposit request',
    currency:'USD',
    customer:customer.id
  })})
  .then(charge => res.send('success'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//kade
