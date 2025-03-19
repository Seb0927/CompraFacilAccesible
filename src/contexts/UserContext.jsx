import { createContext, useState } from 'react';

// Create the context with a default value
export const UserContext = createContext({
  user: null,
  setUser: () => {}
});

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};