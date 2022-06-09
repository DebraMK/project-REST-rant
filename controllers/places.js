const res = require('express/lib/response')

const router = require('express').Router()
const db = require('../models')
// const places = require('../models/places.js')


router.get('/', async (req, res) => {
    try {
        const places = await db.Place.find()
        res.render('places/index', { places })
    }
    catch (error) {
        console.log(err)
        res.send('error404')
    }
})

router.post('/', async (req, res) => {
    try {
        const places = await db.Place.create(req.body)
        res.redirect('/places')
    }
    catch(error) {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            for (var field in err.errors) {
                message += `${field} was ${err.errors[field].value}.`
                message += `${err.errors[field].message}`
            }
            console.log('validation error message', message)
            res.render('places/new', { message })
        } else 
        {console.log('err', err)
        res.render('error404')}
  }
})

// NEW route
router.get('/places/new', (req, res) => {
    res.render('places/new')
})

// Show route
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
    })

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

// edit place
router.get('/:id/edit', async (req, res) => {
    
    try {
        const place = await db.Place.findById(req.params.id)
        res.render('places/edit', { place })
    }
    catch(error) {
        res.render('error404')
    }
})

router.put('/:id', (req, res) => {
    db.Place.findById(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        res.render('error404')
    })
})

router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    req.body.rant = req.body.rant ? true : false

    db.Place.findById(req.params.id)
    .then(place => {
        console.log("test90")
        db.Comment.create(req.body)
        .then(comment => {
            console.log("test93")
            place.comments.push(comment._id)
            place.save()
            .then(() => {
                console.log("test97")
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router