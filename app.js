const express = require('express');
// const stripe = require('stripe')('sk_live_moHjmvjyDNKPlIEvVRuSgjEG');
const stripe = require('stripe')('sk_live_moHjmvjyDNKPlIEvVRuSgjEG');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 13441;

require('dotenv').config();

// console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
// console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_AUTH_TOKEN);


if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (!req.secure && req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect('https://' + req.headers.host + req.url)
    } else {
      next();
    }
  })
}

// Set Static Folder
app.use(express.static('public'));
app.use(bodyParser.json());

// Index route - working with Heroku but not Stripe
// app.get('/', (req, res) => {
//   res.sendFile('public/test.html', {root: __dirname});
// });

// charge route
app.post('/charge', (req, res) => {
  const amount = req.body.totalAmount;
  const email = req.body.customerEmail;
  stripe.customers.create({
      email: email,
      source: req.body.mytoken
    })
    .then(customer => {
      stripe.charges.create({
        amount,
        description: 'Muve deposit request',
        currency: 'USD',
        customer: customer.id
      })
    })
// .then(charge => res.redirect('/index.html'));
});



var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyCQv6t6IEkvCKclLSyC1STff-vVh7M0C1A",
  authDomain: "muve-ce0b0.firebaseapp.com",
  databaseURL: "https://muve-ce0b0.firebaseio.com",
  projectId: "muve-ce0b0",
  storageBucket: "muve-ce0b0.appspot.com",
  messagingSenderId: "274894158485"
};
firebase.initializeApp(config);

const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

var db = firebase.database().ref('providerNumbersColumbus');

db.on('value', function(snapshot) {
  var num = snapshot.val();
  var body = "New moving request. Check your dashboard to view and accept the job. Visit www.muveapp.com."

  app.post('/testtwilio', function(req, res) {
    Promise.all(
      num.map(number => {
        return twilio.messages.create({
          to: number,
          from: '+15704058347',
          body: body
        });
      })
    ).then(messages => {
      console.log('Messages Sent!');
    }).catch(err => console.error(err));
  });
});

// app.post('/test', function (req, res) {
//     console.log('works');
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// d


//kade
