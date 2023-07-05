import { useState, useEffect } from 'react';
import axios from 'axios';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newMovieRating, setNewMovieRating] = useState('');
    const [newMovieRelease, setNewMovieRelease] = useState('');
    const [editMovieId, setEditMovieId] = useState(null);
    const [editMovieTitle, setEditMovieTitle] = useState('');
    const [editMovieRating, setEditMovieRating] = useState('');
    const [editMovieRelease, setEditMovieRelease] = useState('');
    const [warningMessage, setWarningMessage] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/movies', {
                headers: { Accept: 'application/json' }
            });
            setMovies(response.data);
        } catch (error) {
            console.error('Error occurred during search:', error);
        }
    };

    const addMovie = async () => {
        if (!newMovieTitle || !newMovieRating || !newMovieRelease) {
            setWarningMessage('Please fill in all fields');
            return;
        }
        try {
            const response = await axios.post('http://localhost:4000/movies.json', {
                title: newMovieTitle,
                rating: newMovieRating,
                release: newMovieRelease
            });
            console.log('Movie added:', response.data);

      // Clear the input fields and fetch updated movie list
            setNewMovieTitle('');
            setNewMovieRating('');
            setNewMovieRelease('');
            fetchData();
        } catch (error) {
            console.error('Error occurred while adding movie:', error);
        }
    };

    const editMovie = async (movieId, updatedMovie) => {
        if (!updatedMovie.title || !updatedMovie.rating || !updatedMovie.release) {
            setWarningMessage('Please fill in all fields');
            return;
        }
        try {
            const response = await axios.put(
                `http://localhost:4000/movies/${movieId}.json`,
                updatedMovie
            );
            console.log('Movie updated:', response.data);
            setEditMovieId(null);
            setEditMovieTitle('');
            setEditMovieRating('');
            setEditMovieRelease('');
            fetchData();
        } catch (error) {
            console.error('Error occurred while editing movie:', error);
        }
    };

    const deleteMovie = async (movieId) => {
        try {
            const response = await axios.delete(
                `http://localhost:4000/movies/${movieId}.json`
            );
            console.log('Movie deleted:', response.data);
            fetchData();
        } catch (error) {
            console.error('Error occurred while deleting movie:', error);
        }
    };

    const handleEditClick = (movie) => {
        setEditMovieId(movie.id);
        setEditMovieTitle(movie.title);
        setEditMovieRating(movie.rating);
        setEditMovieRelease(movie.release);
    };

    const handleCancelEdit = () => {
        setEditMovieId(null);
        setEditMovieTitle('');
        setEditMovieRating('');
        setEditMovieRelease('');
    };

    const handleSaveEdit = () => {
        const updatedMovie = {
            title: editMovieTitle,
            rating: editMovieRating,
            release: editMovieRelease
        };
        editMovie(editMovieId, updatedMovie);
    };

    return (
        <div className="movie-box">
            <h5>The Books Database provided in the lab is not working, 
                I used a movies database that we have built using Ruby in the Cloud Application Development class.
                The files for that Application have been provided in the zip file and the endpoint used to operate 
                CRUD functionality is 'http://localhost:4000/movies.json'</h5>
            <h1>Movies database</h1>
            <hr />
            <h2>Add New Movie</h2>
            <div className="add-movie">
            <input
                type="text"
                value={newMovieTitle}
                onChange={(event) => setNewMovieTitle(event.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                value={newMovieRating}
                onChange={(event) => setNewMovieRating(event.target.value)}
                placeholder="Rating"
            />
            <input
                type="text"
                value={newMovieRelease}
                onChange={(event) => setNewMovieRelease(event.target.value)}
                placeholder="Release Year"
            />
            <button onClick={addMovie}>Add Movie</button>
            </div>
            {warningMessage && <div className="warning">{warningMessage}</div>}
            <hr />
            {movies.map((movie) => (
                <div key={movie.id} className="movie">
                    {editMovieId === movie.id ? (
                        <div className="edit-inputs">
                            <input
                                type="text"
                                value={editMovieTitle}
                                onChange={(event) => setEditMovieTitle(event.target.value)}
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                value={editMovieRating}
                                onChange={(event) => setEditMovieRating(event.target.value)}
                                placeholder="Rating"
                            />
                            <input
                                type="text"
                                value={editMovieRelease}
                                onChange={(event) => setEditMovieRelease(event.target.value)}
                                placeholder="Release Year"
                            />
                            <div className="edit-buttons">
                            <button onClick={handleSaveEdit}>Save</button>
                            <button onClick={handleCancelEdit}>Cancel</button>
                            </div>
                            {warningMessage && <div className="warning">{warningMessage}</div>}
                        </div>
                    ) : (
                        <div>
                            <div className="details">
                                Title: {movie.title}
                                <br />
                                Released in: {movie.release}
                                <br />
                                Imdb rating: {movie.rating}
                            </div>
                            <div className="edit-buttons">
                            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                            <button onClick={() => handleEditClick(movie)}>Edit</button>
                            </div>
                        </div>
                    )}
                    <hr />
                </div>
            ))}
    </div>
    );
}

export default Movies;