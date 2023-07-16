const express = require('express');
const app = express();

app.get('/names',(req,res) => {
    res.send("Telmo");
})

app.listen(5000, () => {
    console.log('====================================');
    console.log("server is running on port 5000");
    console.log('====================================');
})