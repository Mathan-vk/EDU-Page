const crypto = require('crypto');
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const MERCHANT_ID = "YOUR_MERCHANT_ID";
const SALT_KEY = "YOUR_SALT_KEY";
const SALT_INDEX = "YOUR_SALT_INDEX";
const PHONEPE_BASE_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox"; // for sandbox

app.post("/initiate-payment", async (req, res) => {
  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: req.body.transactionId,
    merchantUserId: req.body.userId,
    amount: req.body.amount * 100, // in paise
    redirectUrl: "http://localhost:3000/payment-status",
    redirectMode: "POST",
    paymentInstrument: {
      type: "PAY_PAGE"
    }
  };

  const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
  const xVerify = crypto.createHash('sha256')
    .update(base64Payload + "/pg/v1/pay" + SALT_KEY)
    .digest('hex') + "###" + SALT_INDEX;

  try {
    const response = await axios.post(`${PHONEPE_BASE_URL}/pg/v1/pay`, {
      request: base64Payload
    }, {
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": xVerify,
        "X-MERCHANT-ID": MERCHANT_ID
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Payment initiation failed");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
