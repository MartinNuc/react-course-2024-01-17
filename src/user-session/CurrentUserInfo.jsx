import { useUser } from "./UserContext"

export function CurrentUserInfo() {
  const {user, logout} = useUser();

  return <div>
    Logged in as {user.username}
    <button onClick={logout}>Logout</button>
  </div>
}