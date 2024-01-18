import './App.css';
import { Joke } from './Joke';
import { AlbumVoting } from './AlbumVoting';
import { UserInfoPane } from './user-session/UserInfoPane';
import { UserContextProvider } from './user-session/UserContext'
import {Layout} from './Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {JokeCategories} from './JokeCategories'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Page not found!</div>,
    children: [
      {
        index: true,
        element: <div>Hello, welcome</div>
      },
      {
        path: 'votes',
        element: <AlbumVoting />
      },
      {
        path: 'categories',
        element: <JokeCategories />
      },
      {
        path: 'categories/:category',
        element: <Joke />
      }
    ]
  }
]);

function App() {
  return (<>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </>
  );
}

export default App;
