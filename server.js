const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get("/dam-end.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'dam-end.html'));
});

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'dam.html'));
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
