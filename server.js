const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route to serve the portfolio page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the Node.js web server
app.listen(PORT, () => {
    console.log(`[SYS_ONLINE] Server running at http://localhost:${PORT}`);
});
