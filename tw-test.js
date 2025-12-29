require("dotenv").config({ path: ".env.local" });

const Twilio = require("twilio");

const SID = process.env.TWILIO_ACCOUNT_SID;
const TOKEN = process.env.TWILIO_AUTH_TOKEN;
const FROM = process.env.TWILIO_WHATSAPP_FROM;
const TO = process.env.ALERT_WHATSAPP_TO;

if (!SID || !TOKEN || !FROM || !TO) {
  console.error("Missing env vars. Check .env.local");
  process.exit(1);
}

const client = Twilio(SID, TOKEN);

(async () => {
  try {
    const msg = await client.messages.create({
      from: FROM,
      to: TO,
      body: "Test message from tw-test.js — ignore",
    });
    console.log("SUCCESS:", msg.sid, msg.status);
  } catch (err) {
    console.error("TWILIO ERROR:", err);
  }
})();
