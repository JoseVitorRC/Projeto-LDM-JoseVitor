import { useState, useEffect } from 'react';

// Hook customizado de autenticação
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Função para fazer login
  const login = (username, password) => {
    // Exemplo de autenticação: em um cenário real, você faria uma requisição para o backend aqui.
    if (username === 'admin' && password === 'senha') {
      const loggedUser = { username }; // Aqui você pode retornar dados do usuário autenticado, como token, nome, etc.
      setUser(loggedUser);
      localStorage.setItem('user', JSON.stringify(loggedUser)); // Armazenando o usuário no localStorage
    } else {
      alert('Credenciais inválidas');
    }
  };

  // Função para fazer logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove o usuário do localStorage
  };

  // Verificar se o usuário já está logado ao carregar a página
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Recupera o usuário armazenado
    }
    setLoading(false); // Finaliza o carregamento do estado de autenticação
  }, []);

  return {
    user,
    loading,
    login,
    logout,
  };
};

export default useAuth;
