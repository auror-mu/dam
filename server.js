const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Define route for dam-end.html
app.get("/dam-end.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'dam-end.html'));
});

// Start serving the dam.html by default
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'dam.html'));
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
