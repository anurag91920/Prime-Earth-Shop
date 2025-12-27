import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Stripe publishable key
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);

/* CHECKOUT FORM */

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    try {
      const res = await fetch(
     `${process.env.REACT_APP_BACKEND_URL}/api/payment/create-payment-intent`,
     {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 100 }),
       }
    );


      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else {
        alert("Payment Successful ");
      }
    } catch (err) {
      alert("Payment failed ");
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "360px",
        padding: "24px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    >
      <label
        style={{
          fontSize: "14px",
          fontWeight: "600",
          marginBottom: "8px",
          display: "block",
        }}
      >
        Card Details
      </label>

      <div
        style={{
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#32325d",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#fa755a",
              },
            },
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Pay ₹100
      </button>
    </form>
  );
}

/* PAYMENT PAGE */
export default function Payment() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        padding: "40px 20px",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Secure Checkout
        </h2>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}
