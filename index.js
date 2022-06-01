require(`dotenv`).config()
const express = require(`express`)

const methodOverride = require(`method-override`)
const placesRoutes = require(`./controllers/places`)
const app = express()
const PORT = process.env.PORT
const mongoose = require('mongoose')

// middleware
app.set('views',__dirname + '/views')
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// Route to places
app.use(`/places`, placesRoutes)

// Route to home page
app.get(`/`, (req, res) => {
    res.render(`home`)
})

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// Error page
app.get(`*`, (req, res) => {
    res.status(404).render(`error404`)
})


app.listen(process.env.PORT)