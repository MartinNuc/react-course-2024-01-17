import React, { useContext,useEffect,useReducer } from 'react';

const UserContext = React.createContext();

const initialState = {
  user: null,
  timeLeft: 0
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        timeLeft: 10
      }
    case 'logout':
      return {
        ...state,
        user: null
      }
    case 'sessionTick':
      if (state.timeLeft <= 1) {
        return {
          ...state,
          user: null
        }
      }
      return {
        ...state,
        timeLeft: state.timeLeft - 1
      }
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
}
let cnt = 0;
export function UserContextProvider({children}) {
  const [session, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (!session.user) { return; }

    let thisIntervalCnt = cnt;
    cnt++;
    const intervalRef = setInterval(() => {
      console.log(thisIntervalCnt)
      dispatch({type: 'sessionTick'})
    }, 1000);

    return () => {
      if (!session.user) { return; }
      clearInterval(intervalRef)
    }
  }, [session.user]);

  return <UserContext.Provider value={{
    login: (user) => dispatch({ type: 'login', payload: user}),
    logout: () => dispatch({ type: 'logout' }),
    user: session.user,
    timeLeft: session.timeLeft
  }}>
    {children}
  </UserContext.Provider>
}

export const useUser = () => useContext(UserContext);