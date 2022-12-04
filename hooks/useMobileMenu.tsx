import { createContext, ReactNode, useContext, useState } from 'react';

interface MobileMenuContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface MobileMenuProviderProps {
  children: ReactNode;
}

const MobileMenuContext = createContext<MobileMenuContext>({
  isOpen: false,
  setIsOpen: () => {}
});

export const useMobileMenu = () => useContext(MobileMenuContext);

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
