
const express = require("express");
const bodyPaser = require("body-parser");





const app = express()
// app.use(authJwt({secret: "test"}));

app.set("view engine", "ejs")

app.use(express.static("public"))

app.use(express.json())


const port = process.env.PORT || 2220;

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
