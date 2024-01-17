import React, { useContext,useState } from 'react';

const UserContext = React.createContext();

export function UserContextProvider({children}) {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{
    login: (user) => setUser(user),
    logout: () => setUser(null),
    user
  }}>
    {children}
  </UserContext.Provider>
}

export const useUser = () => useContext(UserContext);