const express = require("express");
const app = express();
const connectDB = require('./config/db')
const user = require('./routes/api/users')
const PORT = process.env.PORT || 5000

//calling connection to database
connectDB();

app.use(express.json({
    extended: false
}))

app.get("/", (req, res) => {
    res.send("hello World")
})

//Difine Routes

app.use("/api/users", require("./routes/api/users"))
app.use("/api/proile", require("./routes/api/profile"))
app.use("/api/post", require("./routes/api/post"))
app.use("/api/auth", require("./routes/api/auth"))


app.listen(PORT, () => console.log(`listening on ${PORT}`));