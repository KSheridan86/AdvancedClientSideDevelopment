
function Movie(props) {
  return (
    <div className="center">
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
      <p className="description">
          Description:<br></br> {props.description}
      </p>
      <br/>
      <hr></hr>
    </div>
  );
}

export default Movie;
