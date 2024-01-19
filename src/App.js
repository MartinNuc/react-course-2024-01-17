import './App.css';
import { Joke } from './Joke';
import { AlbumVoting } from './AlbumVoting';
import { UserContextProvider } from './user-session/UserContext'
import { Suspense } from 'react';
import { Layout } from './Layout'
import { createBrowserRouter } from 'react-router-dom';
import { JokeCategories } from './JokeCategories'
import { RouterProvider } from 'react-router-dom'
	
import { store } from './store/store'
import {Provider} from 'react-redux'

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
        element: <Suspense fallback={<h1>Loading with suspense</h1>}><Joke /></Suspense>
      }
    ]
  }
]);

function App() {
  return (<>
    <Provider store={store}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </Provider>
  </>
  );
}

export default App;
