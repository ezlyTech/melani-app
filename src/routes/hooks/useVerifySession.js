import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import UserContext from "src/UserContext";
import { useNavigate } from "react-router-dom";

export default function usePreventReload() {
  const { isAuthenticated } = useAuth0()
  // const { name } = useContext(UserContext)
  const navigate = useNavigate()

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     const message = "You have unsaved changes. Are you sure you want to leave?";
  //     event.returnValue = message;
  //     return message;
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("username") && !isAuthenticated) {
      const delay = 1500;
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, delay);

      return () => clearTimeout(timeoutId);
    }
    return undefined;
  }, [isAuthenticated, navigate]);
}
