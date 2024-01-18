import { useUser } from "./UserContext"

export function CurrentUserInfo() {
  const {user, logout} = useUser();

  return <div data-testid="currentUserInfo">
    Logged in as {user.username}
    <button onClick={logout}>Logout</button>
  </div>
}