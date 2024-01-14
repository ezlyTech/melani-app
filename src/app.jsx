import { useState, useMemo } from "react";
import "src/global.css";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";
import Router from "src/routes/sections";
import ThemeProvider from "src/theme";
import UserContext from "./UserContext";

export default function App() {
  const [isCartUpdated, setIsCartUpdated] = useState(false);
  useScrollToTop();

  const userContextValue = useMemo(() => ({ isCartUpdated, setIsCartUpdated }), [isCartUpdated, setIsCartUpdated]);

  return (
    <UserContext.Provider value={userContextValue}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </UserContext.Provider>
  );
}
