const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img height="200px" src="/images/ravioli.jpg" alt="ravioli"/>
                    <div>
                        Photo by Tom Dillon on Unsplash
                    </div>
                </div>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home