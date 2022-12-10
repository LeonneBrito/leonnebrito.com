import { createContext, ReactNode, useContext, useState } from 'react';

import { en, pt } from '../locales';

type Locations = 'en' | 'pt';

interface TranslationContext {
  location: Locations;
  setLocation: (location: Locations) => void;
  translations: typeof en | typeof pt;
}

interface TranslationProviderProps {
  children: ReactNode;
}

const TranslationContext = createContext<TranslationContext>(
  {} as TranslationContext
);

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [location, setLocation] = useState<Locations>('en');

  const getTranslation = () => {
    if (location === 'en') {
      return en;
    }

    return pt;
  };

  return (
    <TranslationContext.Provider
      value={{
        location,
        setLocation,
        translations: getTranslation()
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);

  return context;
}
