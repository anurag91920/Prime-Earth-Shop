const express = require('express');
const Stripe = require('stripe');
const Payment = require('../models/Payment');

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create payment intent
router.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // convert to cents
            currency: 'usd'
        });

        const payment = await Payment.create({
            amount,
            status: 'pending'
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
            paymentId: payment._id
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
