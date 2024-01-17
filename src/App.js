import './App.css';
import { Joke } from './Joke';
import { AlbumVoting } from './AlbumVoting';

function App() {
  return (<>
    <div className="App">
      <Joke />
    </div>
    <div>
      <AlbumVoting />
    </div>
  </>
  );
}

export default App;
