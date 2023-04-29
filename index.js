"use strict";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const body = "brought to you by super variables";
client.messages
  .create({
    body: body,
    from: "+14259993410",
    to: "+14259996981",
  })
  .then((message) => console.log(message.sid));
