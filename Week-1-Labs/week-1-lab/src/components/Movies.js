import Movie from './Movie'

function Movies(props) {
  return (
    <div>
      <h3>Favorite Movies List</h3>
      {props.movies.map(function(i, index) {
        return (
          <div key={index}>
            <Movie
              title={i.title}
              year={i.year}
              director={i.director}
              description={i.description}
              genre={i.genre}
            />
          </div>
        )
      })}
    </div>
  );
}

export default Movies;
