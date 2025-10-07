import React, { createContext } from 'react';
import { useUserDetailsContext } from '@/lib/hooks/useUserDetailsContext';

interface IUserContextProviderProps {
  children: JSX.Element[] | JSX.Element;
}

export const UserContext = createContext({} as ReturnType<typeof useUserDetailsContext>);

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  return <UserContext.Provider value={useUserDetailsContext()}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
