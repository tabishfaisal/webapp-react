import axios from "axios";
import Header from "../layouts/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const fetchMovie = () => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((err) => {
                console.error("Error fetching movie:", err);
            });
    };

    useEffect(() => {
        fetchMovie();
    }, [id]);

    return (
        <>
            <Header />
            <div className="card-container">
                <div className="card-row">
                    <h1>The Movie Detail</h1>
                    <hr />
                    <div className="card-col">
                        <div className="cardDetail">
                            <img className="image" src={`http://localhost:3000/img/${movie?.image}`} alt={movie?.title} />
                        </div>
                        <div className="cardDetail">
                            <h1>{movie?.title}</h1>
                            <p>Director: {movie?.director}</p>
                            <p>{movie?.abstract}</p>
                            <p>Movie type: {movie?.genre}</p>
                            <p>Release Year: {movie?.release_year}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="reviews-section">
                        <h2>Reviews</h2>
                        {movie?.reviews && movie.reviews.length > 0 ? (
                            <ul>
                                {movie.reviews.map((review, index) => (
                                    <li key={index} className="review-item">
                                        <p><strong> By : {review.name}</strong></p>
                                        <p>Vote : {review.vote}</p>
                                        <p> Comment : " {review.text} "</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No reviews available for this movie.</p>
                        )}

                       <ReviewForm id={id} onAdding={fetchMovie}/> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default MoviePage;
