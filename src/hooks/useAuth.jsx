import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (username, password) => {
    if (username === 'admin' && password === 'senha') {
      const loggedUser = { username }; 
      setUser(loggedUser);
      localStorage.setItem('user', JSON.stringify(loggedUser)); 
    } else {
      alert('Credenciais inválidas');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
    setLoading(false);
  }, []);

  return {
    user,
    loading,
    login,
    logout,
  };
};

export default useAuth;
