import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../store/user-session-slice';

export function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={() => dispatch(login({ username, email }))}>
        Login
      </button>
    </div>
  );
}
