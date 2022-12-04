import { createContext, ReactNode, useContext, useState } from 'react';

interface CommandMenuContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface CommandMenuProviderProps {
  children: ReactNode;
}

const CommandMenuContext = createContext<CommandMenuContext>({
  isOpen: false,
  setIsOpen: () => {}
});

export const useCommandMenu = () => useContext(CommandMenuContext);

export const CommandMenuProvider = ({ children }: CommandMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CommandMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CommandMenuContext.Provider>
  );
};
