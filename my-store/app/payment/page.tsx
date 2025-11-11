"use client";
import { useState } from "react";

export default function PaymentPage() {
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      alert("Payment successful!");
      setProcessing(false);
    }, 2000);
  };

  return (
    <main className="max-w-md mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      <p className="mb-4">Amount: ₹1299</p>
      <button
        onClick={handlePayment}
        disabled={processing}
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </main>
  );
}
