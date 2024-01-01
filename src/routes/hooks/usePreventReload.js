import { useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "src/UserContext";
import { useNavigate } from "react-router-dom";

export default function usePreventReload() {
  const { isAuthenticated } = useAuth0()
  const { name } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "You have unsaved changes. Are you sure you want to leave?";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (!name && !isAuthenticated) {
      // Delay the navigation by 1.5 seconds
      const delay = 1500; // 1.5 seconds in milliseconds

      const timeoutId = setTimeout(() => {
        // Your navigation logic here
        navigate("/");
      }, delay);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }

    // Return a value to satisfy ESLint
    return undefined;
  }, [isAuthenticated, name, navigate]);
}
