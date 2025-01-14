import React from "react";
import { Link } from "react-router-dom";

function Movies({movie}) {
    return (
            <div className="card">
                <img className="image" src={`http://localhost:3000/img/${movie.image}`} />
                <h1>{movie.title}</h1>
                <p>{movie.director}</p>
                <p>{movie.abstract}</p>
                <Link className="btn" to={`/movies/${movie.id}`}>See more</Link>
            </div>
    )
}
export default Movies;