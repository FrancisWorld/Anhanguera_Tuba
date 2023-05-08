import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Aqui você pode adicionar a lógica para recuperar informações de autenticação do usuário (por exemplo, a partir de um cookie ou local storage)
  }, []);

  useEffect(() => {
    console.log('Usuário atualizado:', user);
  }, [user]);

  const login = async (email, password) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Aqui você pode armazenar as informações de autenticação do usuário (por exemplo, em um cookie ou local storage)
      setUser(data.user);
    } else {
      throw new Error(data.message);
    }
  };

  const register = async (email, password) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Aqui você pode armazenar as informações de autenticação do usuário (por exemplo, em um cookie ou local storage)
      setUser(data.user);
    } else {
      throw new Error(data.message);
    }
  };

  const logout = () => {
    // Aqui você pode remover as informações de autenticação do usuário (por exemplo, a partir de um cookie ou local storage)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
