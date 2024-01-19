import { useUser } from "./UserContext"

export function CurrentUserInfo() {
  const {user, timeLeft, logout} = useUser();

  return <div data-testid="currentUserInfo">
    Logged in as {user.username} (expires in {timeLeft}s)
    <button onClick={logout}>Logout</button>
  </div>
}