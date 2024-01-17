import './App.css';
import { Joke } from './Joke';
import { AlbumVoting } from './AlbumVoting';
import {UserInfoPane} from './user-session/UserInfoPane';
import {UserContextProvider} from './user-session/UserContext'

function App() {
  return (<>
    <UserContextProvider>
      <UserInfoPane />
    </UserContextProvider>
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
