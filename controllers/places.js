const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: `Rizo's Rave`,
        city: `Merrimac`,
        state: `WI`,
        cuisine: `American, Persian`,
        pic: `http://placekitten.com/250/250`
    }, {
        name: `Bayla's Bistro`,
        city: `Baraboo`,
        state: `WI`,
        cuisine: `Italian, Morroccan`,
        pic: `http://placekitten.com/250/250`
    }

    ]
    res.render(`places/index`, { places })
})

module.exports = router