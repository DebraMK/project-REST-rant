const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  

router.get('/new', (req,res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: `Rizzo's Rave`,
        city: `Merrimac`,
        state: `WI`,
        cuisine: `American, Persian`,
        pic: `/images/catfood.jpg`
    }, {
        name: `Bayla's Bistro`,
        city: `Baraboo`,
        state: `WI`,
        cuisine: `Italian, Morroccan`,
        pic: `/images/canecorso.jpg`
    }

    ]
    res.render(`places/index`, { places })
})

module.exports = router