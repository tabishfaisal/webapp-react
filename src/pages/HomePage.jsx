import Header from "../layouts/Header";
import { useEffect, useState } from "react";
import Movies from '../components/Movies.jsx';
import axios from "axios";

function HomePage() {

    const [movies, setMovies] = useState([]);

    function fetchMovies() {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                setMovies(response.data.movies)
                //console.log(response);        
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <section>
                <Header />
                <hr />
                <div className="container">
                    <h1 className="title">List of Movies</h1>
                    <div className="row">
                        {
                            movies.length > 0 ? (
                                movies.map(movie => (
                                    <div className="col" key={movie.id}>
                                        <Movies movie={movie}/>
                                    </div>
                                ))
                            ) : (
                                <p>Loading movies...</p>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;
