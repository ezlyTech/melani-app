import { useState, useMemo, useEffect } from "react";
import "src/global.css";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";
import Router from "src/routes/sections";
import ThemeProvider from "src/theme";
import UserContext from "./UserContext";

export default function App() {
  const [isCartUpdated, setIsCartUpdated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useScrollToTop();

  useEffect(() => {
    if (sessionStorage.getItem("isAuthenticated")) setIsAuthenticated(true)
  }, [isAuthenticated, setIsAuthenticated])

  const userContextValue = useMemo(() => ({ isCartUpdated, setIsCartUpdated, isAuthenticated, setIsAuthenticated }), [isCartUpdated, setIsCartUpdated, isAuthenticated, setIsAuthenticated]);

  return (
    <UserContext.Provider value={userContextValue}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </UserContext.Provider>
  );
}
