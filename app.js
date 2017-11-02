// var accountSid = process.env.TWILIO_ACCOUNT_SID;
// var authToken = process.env.TWILIO_AUTH_TOKEN;
// var client = require('twilio')(accountSid, authToken);

// client.messages.create({
//   to: "+15137816780",
//   from: "+18886194715",
//   body: "hi there old lady"
// }, function(err, message) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(message.sid);
//   }
// });

// var accountSid = process.env.TWILIO_ACCOUNT_SID;
// var authToken = process.env.TWILIO_AUTH_TOKEN;
// var client = require('twilio')(accountSid, authToken);
// var express = require('express');
// var app = express();
//
// client.messages.create({
//   to: "+15137816780",
//   from: "+18886194715",
//   body: "Testing, testing, testing hi"
// }).then((messsage) => console.log(message.sid));


var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require('twilio')(accountSid, authToken);

const express = require('express')
const app = express()

app.post('/api', function (req, res) {
    client.messages.create({
        to: "+15137816780",
        from: "+18886194715",
        body: "Testing, testing, testing"
    }).then((messsage) => {
        console.log(message.sid)
        res.send('done!', message.sid )
    });
})

app.listen(8000, function () {
console.log('Example app listening on port 8000!')
})

// app.post('/index.js', function(req, res) {
//   client.messages.create({
//     to: "+15137816780",
//     from: "+18886194715",
//     body: "Testing, testing, testing"
//   }).then((messsage) => console.log(message.sid));
// });
