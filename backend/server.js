const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv  = require('dotenv');

dotenv.config();


const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors({
    origin: 'https://prime-earth-shop.vercel.app',  
    credentials: true
}));

app.use(express.json());

//Test Route
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});


// Routes
app.use('/api/auth', authRoutes);


// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


.then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
})


.catch(err => console.error('Database connection error:', err));

