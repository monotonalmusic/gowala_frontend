import { createContext, useContext } from "react";

// Create the Context
const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {

    const local = {
        appName: "My App",
        appVersion: "1.0.0",
        appAuthor: "John Doe"
    };

  return (
    <AppContext.Provider
      value={{ local
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
