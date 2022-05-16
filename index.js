require(`dotenv`).config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Route to places
app.use(`/places`, require(`./controllers/places`))

// Route to home page
app.get(`/`, (req, res) => {
    res.render(`home`)
})

// Error page
app.get(`*`, (req, res) => {
    res.status(404).send(`<h1>Page not found.</h1>`)
})

app.listen(process.env.PORT)