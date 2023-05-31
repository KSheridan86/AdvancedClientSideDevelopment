import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies'


function App() {
  var movies = [
    {
      "title": "Primer",
      "year": "2004",
      "director": " Shane Carruth",
      "description": "Intellectual engineers Aaron (Shane Carruth) and Abe (David Sullivan) build and sell error-checking technology with the help of their friends Robert (Casey Gooden) and Phillip (Anand Upadhyaya). But when Aaron and Abe accidentally invent what they think is a time machine, Abe builds a version capable of transporting a human and puts the device to the test. As the two friends obsess over their creation, they discover the dark consequences of their actions.",
      "genre": "Sci-fi/Drama"
    },
    {
      "title": "The Northman",
      "genre": "Adventure/Action",
      "year": "2022",
      "director": "Robert Eggers",
      "description": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who raids Slavic villages. He soon meets a seeress who reminds him of his vow -- save his mother, kill his uncle, avenge his father."
    },
    {
      "title": "The Lighthouse",
      "genre": "Horror/Drama",
      "year": "2019",
      "director": "Robert Eggers",
      "description": "In a remote island, Ephraim Winslow arrives as a lighthouse keeper and assists his elderly supervisor, Thomas Wake. As days pass, Winslow is haunted by strange and mysterious visions."
    },
    {
      "title": "The Lighthouse",
      "genre": "Horror/Drama",
      "year": "2019",
      "director": "Robert Eggers",
      "description": "In a remote island, Ephraim Winslow arrives as a lighthouse keeper and assists his elderly supervisor, Thomas Wake. As days pass, Winslow is haunted by strange and mysterious visions."
    },
    {
      "title": "Memento",
      "genre": "Mystery/Thriller",
      "year": "2000",
      "director": "Christopher Nolan",
      "description": "Leonard Shelby, an insurance investigator, suffers from anterograde amnesia and uses notes and tattoos to hunt for the man he thinks killed his wife, which is the last thing he remembers."
    },
    {
      "title": "Her",
      "genre": "Romance/Sci-fi",
      "year": "2013",
      "director": "Christopher Nolan",
      "description": "Theodore Twombly, an introverted writer, buys an Artificial Intelligence system to help him write. However, when he finds out about the AI's ability to learn and adapt, he falls in love with it."
    },
    {
      "title": "Lost Highway",
      "genre": "Noir/Neo-noir",
      "year": "1997",
      "director": "David Lynch",
      "description": "From this inventory of imagery, Lynch fashions two separate but intersecting stories, one about a jazz musician (Bill Pullman), tortured by the notion that his wife is having an affair, who suddenly finds himself accused of her murder. The other is a young mechanic (Balthazar Getty) drawn into a web of deceit by a temptress who is cheating on her gangster boyfriend. These two tales are linked by the fact that the women in both are played by the same actress (Patricia Arquette)."
    }
  ]

  return (
    <div>
      <Movies movies={movies}  />
    </div>
  );

}

export default App;
