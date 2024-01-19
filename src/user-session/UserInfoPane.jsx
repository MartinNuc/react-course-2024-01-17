import {LoginForm} from './LoginForm';
import { useUser } from "./UserContext";
import {CurrentUserInfo} from './CurrentUserInfo'
import { useSelector } from 'react-redux';

export function UserInfoPane() {
  const user = useSelector(state => state.userSessionSlice.user);

  return <div>
    {user ? <CurrentUserInfo /> : <LoginForm />}
  </div>
}