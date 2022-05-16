require(`dotenv`).config()
const express = require('express')
const app = express()

// Route to places
app.use(`/places`, require(`./controllers/places`))

// Route to home page
app.get(`/`, (req, res) => {
    res.send(`Hello world! I got this`)
})

// Error page
app.get(`*`, (req, res) => {
    res.status(404).send(`<h1>Page not found.</h1>`)
})

app.listen(process.env.PORT)