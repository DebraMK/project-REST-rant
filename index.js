require(`dotenv`).config()
const express = require(`express`)
const placesRoutes = require(`./controllers/places`)
const app = express()

app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

// Route to places
app.use(`/places`, placesRoutes)

// Route to home page
app.get(`/`, (req, res) => {
    res.render(`home`)
})

// Error page
app.get(`*`, (req, res) => {
    res.status(404).render(`error404`)
})

app.listen(process.env.PORT)