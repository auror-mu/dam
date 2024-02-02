const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// Your static site folder name
app.use(express.static("dam", {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    },
}));

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'dam.html'));
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

