const express = require('express')
const path = require("path")
const app = express()
const port = 5000

const fs = require('fs')

app.set('view engine', 'ejs')
app.use("*/styles", express.static(path.join(__dirname, "styles")));
app.use("*/files", express.static(path.join(__dirname, "static")));
app.use("*/scripts", express.static(path.join(__dirname, "scripts")));

// !debug
// app.use((req, res, next) => {
// 	console.log(req.url);
// 	next();
// });

app.get('/', (req, res) => {
  res.render('index.ejs')
})

//event routs
app.get("/event/sports/cricket", (req, res) => {
  res.send("/event/sports/cricket")
})
app.get("/event/sports/football", (req, res) => {
  res.render("sports/football.ejs")
})
app.get("/event/sports/basketball", (req, res) => {
  res.send("/event/sports/basketball")
})
app.get("/event/sports/swiming", (req, res) => {
  res.send("/event/sports/swiming")
})
app.get("/event/ba/dance", (req, res) => {
  res.send("/event/ba/dance")
})
app.get("/event/ba/music", (req, res) => {
  res.send("/event/ba/music")
})
app.get("/event/ba/art", (req, res) => {
  res.send("/event/ba/art")
})
app.get("/event/ba/martial arts", (req, res) => {
  res.send("/event/ba/martial arts")
})
app.get("/event/ba/photography", (req, res) => {
  res.send("/event/ba/photography")
})

app.use((req, res) => {
  res.status(404)
  res.render("pagenotfound.ejs")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})