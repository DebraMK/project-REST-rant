const router = require('express').Router()

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