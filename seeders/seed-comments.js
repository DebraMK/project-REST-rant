const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // sample comment
    let comment = await db.Comment.create({
        author: 'famished fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing. Highly recommend!'
    })
    // add comment to place's comment array
    place.comments.push(comment.id)
    // save place with comment
    await place.save()

    process.exit()
}

seed ()