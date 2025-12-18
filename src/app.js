const express = require("express");
const app = express();
const authRoute = require("./router/auth.route")
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("hi i am root ")
});

app.use("/api/auth",authRoute);



module.exports = app;

