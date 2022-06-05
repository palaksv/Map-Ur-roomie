const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const path = require('path');
const hbs = require('hbs')

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../template/views")

app.set('view engine', 'hbs');
app.set('views', template_path )
app.use(express.static(static_path))

app.get("/", (req, res) => {
    res.render('signup');
})
app.get("/login", (req, res) => {
    res.render('login');
})
app.get("/homepage", (req, res) => {
    res.render('index');
})
app.get("/profile", (req, res) => {
    res.render('profile');
})
app.get("/floor1", (req, res) => {
    res.render('floor1');
})
app.get("/floor2", (req, res) => {
    res.render('floor2');
})
app.get("/floor3", (req, res) => {
    res.render('floor3');
})

app.listen(port, () => {
    console.log("listening");
})