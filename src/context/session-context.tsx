import { getLoginApiPath, getLogoutApiPath } from '@/lib/utils/paths';
import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type User = {
  name: string;
  avatar_url: string;
  [key: string]: any;
};

type SessionContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
  error: string | null;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

type SessionProviderProps = {
  children: ReactNode;
};

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/auth/session');
        if (!res.ok) throw new Error('Failed to fetch user');

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError('unknow error');
      }
    };
    fetchUser();
  }, []);

  const login = () => router.push(getLoginApiPath());
  const logout = () => router.push(getLogoutApiPath());

  return (
    <SessionContext.Provider value={{ user, login, logout, error }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
