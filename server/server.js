const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Basic API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the Node.js server!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});