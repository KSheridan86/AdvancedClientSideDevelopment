// import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies'


function App() {
  var movies = [
    {
      "title": "Interstellar",
      "genre": "Adventure/Sci-fi/Drama",
      "year": "2014",
      "director": "Christopher Nolan",
      "description": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    {
      "title": "The Big Lebowski",
      "genre": "Comedy/Crime",
      "year": "1998",
      "director": "The Coen Brothers",
      "description": "Ultimate L.A. slacker Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing wife."
    },
    {
      "title": "Kingpin",
      "genre": "Comedy/Sport",
      "year": "1996",
      "director": "The Farrelly Brothers",
      "description": "A star bowler whose career was prematurely 'cut off' hopes to ride a new prodigy to success and riches."
    },
    {
      "title": "The Cable Guy",
      "genre": "Comedy/Thriller",
      "year": "1996",
      "director": "Ben Stiller",
      "description": "A designer makes a grievious mistake when he rejects the friendship of a borderline cable guy."
    },
    {
      "title": "Man on the Moon",
      "genre": "Biography/Comedy/Drama",
      "year": "1999",
      "director": "Milos Forman",
      "description": "The life and career of legendary comedian Andy Kaufman."
    },
    {
      "title": "Jurassic Park",
      "genre": "Adventure/Sci-fi",
      "year": "1993",
      "director": "Steven Spielberg",
      "description": "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
    }
  ]

  return (
    <div>
      <Movies movies={movies}  />
    </div>
  );

}

export default App;
