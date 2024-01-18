import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

export const JokeCategories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('https://api.chucknorris.io/jokes/categories', {
      signal: abortController.signal
    })
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch((e) => console.error(e))

    return () => abortController.abort();
  }, []);

  if (!categories) { return <div>Loading...</div> }

  return <div>
    <ul>
      {categories.map(category => (
        <li>
          <Link to={category}>{category}</Link>
        </li>
      ))}
    </ul>

  </div>
}