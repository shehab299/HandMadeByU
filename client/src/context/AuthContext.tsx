import { createContext, useContext } from "react";
import { useUser } from "@features/user/hooks/useUser";
import { User } from "@types";

type AuthContextType = {
  user: User | undefined;
  isPending: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, isPending } = useUser();

  return (
    <AuthContext.Provider value={{ user, isPending }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
