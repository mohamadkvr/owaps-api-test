const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/findTheFlagParameter', (req, res) => {
    if(req.query.hasOwnProperty("dialog")){
        res.status(201).send('this is the flag' + "{{dialog}}");
    }else {
        res.status(201).send('this is the flag' + "{{incorrect}}");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});