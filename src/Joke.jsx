import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from './store/joke-slice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Joke() {
  const {category} = useParams();
  const joke = useSelector(state => state.jokeSlice.joke);
  const isLoading = useSelector(state => state.jokeSlice.loading === 'pending');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJoke(category));
  }, [])

  return <div>
    <button disabled={isLoading} onClick={() => dispatch(fetchJoke(category))}>
      Load next
    </button>
    <p>{isLoading && <>⏰</>}{joke}</p>
  </div>;  
}

export const PI = 3.14;

export default Joke;