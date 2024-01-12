import { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Container,
  Typography
} from "@mui/material";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import usePreventReload from "src/routes/hooks/usePreventReload";
// import UserContext from "../../UserContext";
import { HomeCategoriesBlock, HomeMenuBlock } from "./components";

export default function Home() {
  const { user, isAuthenticated } = useAuth0()
  // const { name } = useContext(UserContext);
  const [name, setName] = useState()
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  usePreventReload()

  useEffect(() => {
    setName(sessionStorage.getItem("username"))

    const fetchData = async () => {
      try {
        const itemData = await axios.get("http://localhost:3031/api/categories");
        setCategories(itemData.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    !isLoading &&
    <>
      <Container sx={{ bgcolor: "#FFEEE1" }}>
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
  );
}
