const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cors = require('cors');  // Import CORS middleware

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000',  // Allow this origin (React default port)
    optionsSuccessStatus: 200
}));

// API Routes
app.use('/api', bookRoutes);
app.use('/api', reviewRoutes);  // This handles /api/books/:id/reviews

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder to serve the React app
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Serve the index.html file if the route is not an API route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

