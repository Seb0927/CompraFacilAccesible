import { createContext, useState, useEffect } from 'react';

// Storage keys
const USERS_STORAGE_KEY = 'users';
const CURRENT_USER_KEY = 'current_user';

// Default user for first-time setup
const DEFAULT_USERS = [
  { email: 'john@comprafacil.com', password: 'comprafacil1234' }
];

export const UserContext = createContext({
  users: [], // All registered users (email, password only)
  addUser: () => {}, // Add a new user
  user: null, // Currently logged in user
  setUser: () => {}, // Update current user (login/logout)
});

export const UserProvider = ({ children }) => {
  // Initialize states from localStorage or defaults
  const [users, setUsers] = useState(() => {
    try {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      return storedUsers ? JSON.parse(storedUsers) : DEFAULT_USERS;
    } catch (error) {
      console.error('Error loading users from localStorage:', error);
      return DEFAULT_USERS;
    }
  });
  
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem(CURRENT_USER_KEY);
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error loading current user from localStorage:', error);
      return null;
    }
  });

  // Persist users to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users to localStorage:', error);
    }
  }, [users]);

  // Persist current user to localStorage whenever it changes
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    } catch (error) {
      console.error('Error saving current user to localStorage:', error);
    }
  }, [user]);

  // Function to add a new user with validation
  const addUser = (newUser) => {
    // Validate required fields
    if (!newUser.email || !newUser.password) {
      return { success: false, message: 'Todos los campos son requeridos' };
    }

    // Check if user already exists
    const userExists = users.some(u => u.email === newUser.email);
    if (userExists) {
      return { success: false, message: 'Este correo ya está registrado' };
    }
    
    // Add user to the array (only store email and password)
    setUsers(prevUsers => [...prevUsers, {
      email: newUser.email,
      password: newUser.password
    }]);
    return { success: true, message: 'Usuario registrado exitosamente' };
  };

  // Create the context value
  const value = {
    users,
    addUser,
    user,
    setUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};