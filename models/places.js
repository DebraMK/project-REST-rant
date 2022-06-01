// module.exports = [{
//     name: `Rizzo's Rave`,
//         city: `Merrimac`,
//         state: `WI`,
//         cuisine: `Sushi, Persian`,
//         pic: `/images/catfood.jpg`
//     }, {
//         name: `Bayla's Bistro`,
//         city: `Baraboo`,
//         state: `WI`,
//         cuisine: `Italian, Morroccan`,
//         pic: `/images/canecorso.jpg`
// }]


const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    cuisine: { type: String, required: true },
    city: { type: String, default: 'Anytown'},
    state: { type: String, default: 'USA'}, 
    founded: Number
})

module.exports = mongoose.model('Places', placeSchema)