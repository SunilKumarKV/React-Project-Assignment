import { v4 as uuidv4 } from 'uuid';

export const generateUserId = (): string => {
  return uuidv4();
};

export const saveUserToLocalStorage = (userData: any) => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem('userData');
  return storedUser ? JSON.parse(storedUser) : null;
};