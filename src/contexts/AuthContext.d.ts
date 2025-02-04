import React, { ReactNode } from 'react';
interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}
interface AuthProviderProps {
    children: ReactNode;
}
export declare const AuthProvider: React.FC<AuthProviderProps>;
export declare const useAuth: () => AuthContextType;
export {};
