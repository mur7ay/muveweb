const express = require('express');
const stripe = require('stripe')('sk_test_LZJGwg1WdZXEKRig7xEMM2eC');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 13441;


if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (!req.secure && req.headers['X-forwarded-proto'] !== 'https') {
      console.log('condition check!!!! - not secure')
      res.redirect('https://' + req.headers.host + req.url)
    } else {
      console.log('condition check!!!! - secured already')
      next();
    }
  })
}

// Set Static Folder


app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   var sslUrl;
//
//   if (process.env.NODE_ENV === 'production' &&
//     req.headers['x-forwarded-proto'] !== 'https') {
//
//     sslUrl = ['https://muveapp.com', req.url].join('');
//     return res.redirect(sslUrl);
//   }
//
//   return next();
// });
//
// app.use(function (req, res, next) {
//   var newURL;
//
//   // If not on HTTPS, or not on the main domain, redirect
//   if (process.env.NODE_ENV === 'production' &&
//     (req.headers['x-forwarded-proto'] !== 'https' || req.headers.host !== 'hjnilsson.com')) {
//
//     newURL = ['https://muveapp.com', req.url].join('');
//     return res.redirect(newURL);
//   }
//
//   return next();
// });

// Index route - working with Heroku but not Stripe
// app.get('/', (req, res) => {
//   res.sendFile('public/test.html', {root: __dirname});
// });

// Payment route


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


// const accountSid = 'AC79e7044c931e917688e13f14a88a59de';
// const authToken = 'e74672ad5524970753d4c58085ed288d';
//
// const client = require('twilio')(accountSid, authToken);
//
// client.messages.create(
//   {
//     to: '+15137816780',
//     from: '+13854744952',
//     body: 'New Move Request',
//   },
//   (err, message) => {
//     console.log(message.sid);
//   }
// );
///

app.get('/test', (req, res) => {
  res.send('works on HTTPS!!!');
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});




//kade
