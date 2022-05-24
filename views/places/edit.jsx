const React = require('react')
const Def = require('../default')

// Edit place
function edit_form (data){
    return (
        <Def>
            <main>
                <h1>EditPlace</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className='form-control'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' id="name" name="name" value={data.place.name} required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" id="pic" name="pic" />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' id="city" name="city" />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="state">State</label>
                        <input className='form-control' id="state" name="state" />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="cuisine">Cuisine</label>
                        <input className='form-control' id="cuisine" name="cuisine" required/>
                    </div>
                    <input className='btn btn-primary' type="submit" value="Edit Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form