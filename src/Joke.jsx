import useSWR, {useSWRConfig} from 'swr'

export function Joke() {
  const { data, isValidating } = useSWR(
    'https://api.chucknorris.io/jokes/random',
    (cacheKey) => fetch(cacheKey).then(response => response.json()),
    { suspense: true }
  );
  const { mutate } = useSWRConfig();

  return <div>
    <button disabled={isValidating} onClick={() => mutate(`https://api.chucknorris.io/jokes/random`)}>
      Load next
    </button>
    <p>{isValidating && <>⏰</>}{data.value}</p>
  </div>;  
}

export const PI = 3.14;

export default Joke;