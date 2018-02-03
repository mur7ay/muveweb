const express = require('express');
const stripe = require('stripe')('sk_test_LZJGwg1WdZXEKRig7xEMM2eC');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 13441;

// Set Static Folder
app.use(express.static('public'));

// Index route - working with Heroku but not Stripe
// app.get('/', (req, res) => {
//   res.sendFile('public/test.html', {root: __dirname});
// });

// Payment route
app.get('/', function (req, res) {
  res.sendFile( __dirname + '/public/test.html' );
});

// // About page link
// app.get('/about', (req, res) => {
//   res.sendFile('public/about.html', {root: __dirname});
// });

// charge route
app.post('/charge', (req, res) => {
  const amount = req.body.totalAmount;
  const email = req.body.customerEmail;

  stripe.customers.create({
    email: email,
    source: req.body.mytoken
  })
  .then(customer =>  {
    stripe.charges.create({
    amount,
    description:'Muve deposit request',
    currency:'USD',
    customer:customer.id
  })})
  .then(charge => res.sendFile('public/confirmationPage.html', {root: __dirname}));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//kade
