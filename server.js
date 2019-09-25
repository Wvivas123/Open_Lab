const express = require("express");
const app = express();
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

//calling connection to database
connectDB();

app.get("/", (req, res) => {
    res.send("hello World")
})
app.listen(PORT, () => console.log(`listening on ${PORT}`));