import './App.css';
import { Joke } from './Joke';
import { AlbumVoting } from './AlbumVoting';
import { UserInfoPane } from './user-session/UserInfoPane';
import { UserContextProvider } from './user-session/UserContext'
import {JokeFetcher} from './JokeFetcher'

function App() {
  return (<>
    <UserContextProvider>
      <UserInfoPane />
      <div>
        <Joke />
      </div>
      <div>
        <JokeFetcher>
          {(joke, isLoading) => {
            if (isLoading) {
              return <p>Loading...</p>
            }
            return <p>{joke}</p>
          }}
        </JokeFetcher>
      </div>
      <div>
        <AlbumVoting />
      </div>
    </UserContextProvider>
  </>
  );
}

export default App;
