// twilio-wa-test.js (top)
require('dotenv').config({ path: '.env.local' }); // <-- load .env.local explicitly
const Twilio = require('twilio');

const SID = process.env.TWILIO_ACCOUNT_SID;
const TOKEN = process.env.TWILIO_AUTH_TOKEN;
const FROM = process.env.TWILIO_FROM_WHATSAPP || process.env.TWILIO_WHATSAPP_FROM || process.env.TWILIO_WHATSAPP;
const TO = process.env.CONTACT_NOTIFY_WA || process.env.ALERT_WHATSAPP_TO || process.env.NOTIFY_WA;

console.log("DEBUG env loaded:", { SID: !!SID, FROM: !!FROM, TO: !!TO });

if (!SID || !TOKEN) { console.error("Missing SID/TOKEN"); process.exit(1); }
if (!FROM || !TO) { console.error("Missing FROM/TO:", { FROM, TO }); process.exit(1); }

const client = Twilio(SID, TOKEN);

(async () => {
  try {
    const r = await client.messages.create({ from: FROM, to: TO, body: "Test message from twilio-wa-test.js" });
    console.log("OK sid:", r.sid, "status:", r.status);
  } catch (err) {
    console.error("TWILIO ERR:", err && err.code, err && err.message ? err.message : err);
    if (err && err.moreInfo) console.error("moreInfo:", err.moreInfo);
    process.exit(1);
  }
})();
