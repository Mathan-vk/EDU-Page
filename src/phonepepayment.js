import React from 'react';
import axios from 'axios';

function PhonePePayment() {
  const handlePayment = async () => {
    const transactionId = "TXN_" + Date.now();

    const response = await axios.post("http://localhost:5000/initiate-payment", {
      transactionId,
      userId: "user_001",
      amount: 100  // Rs. 100
    });

    const paymentUrl = response.data.data.instrumentResponse.redirectInfo.url;
    window.location.href = paymentUrl;
  };

  return (
    <div className="App">
      <h2>PhonePe Payment</h2>
      <button onClick={handlePayment}>Pay ₹100</button>
    </div>
  );
}

export default PhonePePayment;
