
function Movie(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>
          Genre: {props.genre}
      </p>
      <p>
          Released: {props.year}
      </p>
      <p>
          Director: {props.director}
      </p>
      <p>
          Description: {props.description}
      </p>
      <br/>
    </div>
  );
}

export default Movie;
