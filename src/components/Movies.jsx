import React from "react";

function Movies({movie}) {
    return (
            <div className="card">
                <h1>{movie.title}</h1>
                <p>{movie.director}</p>
                <p>{movie.abstract}</p>
                <button>Read more</button>
            </div>
    )
}
export default Movies;