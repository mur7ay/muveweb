const accountSid = 'AC79e7044c931e917688e13f14a88a59de';
const authToken = 'e74672ad5524970753d4c58085ed288d';

const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+15137816780',
    from: '+13854744952',
    body: 'New Move Request',
  },
  (err, message) => {
    console.log(message.sid);
  }
);
