import { useEffect, useState } from "react"

export const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [isLoadingDisabled, setIsLoadingDisabled] = useState(false);

  useEffect(() => {
    loadJoke();
  }, []);

  function loadJoke() {
    setIsLoadingDisabled(true);
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value))
      .finally(() => setIsLoadingDisabled(false))
  }

  return <div>
    <button disabled={isLoadingDisabled} onClick={loadJoke}>
      Load next
    </button>
    <p>{joke}</p>
  </div>
}