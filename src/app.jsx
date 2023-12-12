import { useState, useMemo } from "react";
import "src/global.css";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";
import Router from "src/routes/sections";
import ThemeProvider from "src/theme";
import UserContext from "./UserContext";

export default function App() {
  const [name, setName] = useState("");
  useScrollToTop();

  const userContextValue = useMemo(() => ({ name, setName }), [name, setName]);

  return (
    <UserContext.Provider value={userContextValue}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </UserContext.Provider>
  );
}
