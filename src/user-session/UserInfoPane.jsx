import {LoginForm} from './LoginForm';
import { useUser } from "./UserContext";
import {CurrentUserInfo} from './CurrentUserInfo'

export function UserInfoPane() {
  const { user } = useUser();

  return <div>
    {user ? <CurrentUserInfo /> : <LoginForm />}
  </div>
}