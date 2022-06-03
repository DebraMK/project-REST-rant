const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet.
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
          <main>
              <div className="row">
                <div className="col-sm-6">
                    <h1>{data.place.name}</h1>
                   <img src={data.place.pic} alt={data.place.name} />
                   <h3>
                       Located in {data.place.city}, {data.place.state}.
                   </h3>
                </div>
                <div className="col-sm-6"></div>
                    <h2>Description</h2>
                    <h3>
                        {data.place.showEstablished() }
                    </h3>
                    <h4>
                        Serving {data.place.cuisine}
                    </h4>
                    <h2>Rating</h2>
                    <h5>Not rated.</h5>
                    <h2>Comments</h2>
                    {comments}
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className='btn btn-danger'>
                    Delete
                </button>
                </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show


// function show (data) {
//     return (
//         <Def>
//           <main>
//             <h1>{ data.place.name }</h1>
//             <div class="card" style={'width: 700'}>
//                 <img class="card-img-top" src="..." alt="Card image cap"/>
//                 <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">Cras justo odio</li>
//                     <li class="list-group-item">Dapibus ac facilisis in</li>
//                     <li class="list-group-item">Vestibulum at eros</li>
//                 </ul>
//             <div class="card-body">
//                 <a href="#" class="card-link">Card link</a>
//                 <a href="#" class="card-link">Another link</a>
//             </div>
//             </div>

//           </main>
//         </Def>
//     )
// }

