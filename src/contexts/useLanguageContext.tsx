import { createContext, useState, ReactNode, useEffect } from "react";

interface LanguageProps {
  language: string;
  setLanguage: (value: string) => void;
}

export const LanguageContext = createContext<LanguageProps>({
  language: "en",
  setLanguage: () => {},
});

interface ReactProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: ReactProps) => {
  const storedLanguage = localStorage.getItem("language");
  const [language, setLanguageState] = useState<string>(storedLanguage || "en");

  const setLanguage = (value: string) => {
    localStorage.setItem("language", value);
    setLanguageState(value);
  };

  useEffect(() => {
    setLanguageState(storedLanguage || "en");
  }, [storedLanguage]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
