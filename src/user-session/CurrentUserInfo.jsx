import { useDispatch, useSelector } from 'react-redux';
import { logout, sessionTick } from '../store/user-session-slice';
import { useEffect } from 'react';

export function CurrentUserInfo() {
  const { user, timeLeft } = useSelector((state) => state.userSessionSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) { return; }

    const intervalRef = setInterval(() => {
      dispatch(sessionTick())
    }, 1000);

    return () => {
      if (!user) { return; }
      clearInterval(intervalRef)
    }
  }, [user]);

  return (
    <div data-testid="currentUserInfo">
      Logged in as {user.username} (expires in {timeLeft}s)
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
