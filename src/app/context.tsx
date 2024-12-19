import React, { createContext, useState, useContext } from 'react';

type StatusContextType = {
  status: boolean;
  setStatus: (value: boolean) => void;
};

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const StatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState(false);

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => {
  const context = useContext(StatusContext);
  if (!context) {
    throw new Error('useStatus must be used within a StatusProvider');
  }
  return context;
};