import { useEffect, useState } from "react"

export const JokeFetcher = ({ children }) => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value))
      .finally(() => setIsLoading(false))
  }, []);

  return <>{children(joke, isLoading)}</>

}