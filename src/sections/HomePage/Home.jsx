import { useEffect, useState, useContext } from "react";
import {
  Card,
  CardMedia,
  Container,
  Typography,
  LinearProgress
} from "@mui/material";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import useVerifySession from "src/routes/hooks/useVerifySession";
import UserContext from "../../UserContext";
import { HomeCategoriesBlock, HomeMenuBlock } from "./components";

export default function Home() {
  const { user, isAuthenticated } = useAuth0()
  const { setIsCartUpdated, isCartUpdated } = useContext(UserContext);
  const [name, setName] = useState()
  const [categories, setCategories] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useVerifySession()

  useEffect(() => {
    setName(sessionStorage.getItem("username"))

    const fetchData = async () => {
      try {
        const itemData = await axios.get("http://localhost:3031/api/categories");
        setCategories(itemData.data);
        setIsDataLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    if (!isAuthenticated) fetchData();
  }, [isAuthenticated]);

  /* eslint-disable */
  useEffect(() => {
    if (isAuthenticated) {
      console.log("Tests")
      const fetchData = async () => {
        try {
          const itemData = await axios.get(`http://localhost:3031/api/users/${user.email}`);
          if (itemData.data) {
            console.log(itemData.data)
            sessionStorage.setItem("isAuthenticated", "true")
            sessionStorage.setItem("userData", JSON.stringify(user))
            sessionStorage.setItem("username", user.given_name)
            sessionStorage.setItem("lineItems", JSON.stringify(itemData.data[0].cart))
            setIsCartUpdated(!isCartUpdated)
            window.location.reload();
          }
        } catch (err) {
          console.log(err);
          if (err.response.status === 400) {
            const data = {
              name: user.given_name,
              email: user.email,
            }
            await axios.post("http://localhost:3031/api/users", data);
            // setReload(!reload)
            sessionStorage.setItem("isAuthenticated", "true")
            sessionStorage.setItem("userData", JSON.stringify(user))
            sessionStorage.setItem("username", user.given_name)
            window.location.reload();
          }

        }
      }
      fetchData()
    }
  }, [isAuthenticated, user, user?.email, user?.given_name])
  /* eslint-disable */

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     const fetchData = async () => {
  //       try {
  //         const itemData = await axios.get(`http://localhost:3031/api/users/${user.email}`);
  //         if (itemData.data) {
  //           console.log(itemData.data)
  //           sessionStorage.setItem("username", user.given_name)
  //           sessionStorage.setItem("lineItems", JSON.stringify(itemData.data[0].cart))
  //           setIsCartUpdated(!isCartUpdated)
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //     fetchData()
  //   }
  // }, []) //reload


  return (
    <>
      {isDataLoading && <LinearProgress variant="indeterminate" />}
      {!isDataLoading && (
        <>
          <Container>
            <Typography
              mt={1} mb={1}
              variant="h4"
              color="#3D2209"
            >
              Welcome, {isAuthenticated ? user.given_name : name}!
            </Typography>
          </Container>
          <Card sx={{ borderRadius: 0 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/assets/images/banner.png"
            />
          </Card>
          <HomeCategoriesBlock categories={categories} />
          <Container>
            {categories.map((category, index) =>
              <HomeMenuBlock
                category={category}
                key={index} />
            )}
          </Container>
        </>
      )}
    </>
  );
}
