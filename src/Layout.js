import { Outlet } from "react-router-dom";
import { UserInfoPane } from "./user-session/UserInfoPane";
import {Link} from 'react-router-dom'

export function Layout() {
  return <>
    <div>
      <UserInfoPane />
    </div>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/votes">Votes</Link></li>
        <li><Link to="/categories">Joke categories</Link></li>
      </ul>
    </div>
    <hr />
    <Outlet />
  </>
}