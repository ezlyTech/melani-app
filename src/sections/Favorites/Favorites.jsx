import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
  Box
} from "@mui/material";
import axios from "axios"
import UserContext from "src/UserContext";
import { ProductCard } from "src/components";
import EmptyState from "src/components/EmptyState";

const Favorites = () => {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdated, setIsUpdated] = useState(false)
  const { isAuthenticated } = useContext(UserContext)

  const handleFavoriteClick = async (id, isFavorite) => {
    if (isAuthenticated) {
      const userData = JSON.parse(sessionStorage.getItem("userData"))
      const data = {
        id,
        isFavorite,
        email: userData.email,
      }

      await axios.post("http://localhost:3031/api/users/favorites", data)
      setIsUpdated(!isUpdated)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        const userData = JSON.parse(sessionStorage.getItem("userData"))
        try {
          const items = await axios.get(`http://localhost:3031/api/items/favorites/${userData.email}`)
          setProductData(items.data)
          setIsLoading(false)
        } catch (err) {
          console.log(err)
        }
      }

      fetchData()
    }
  }, [isAuthenticated, isUpdated])

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <CircularProgress variant="indeterminate" />
      </Box>
    );
  }

  if (productData.length === 0) {
    return (
      <Container>
        <Typography variant="h5" align="left" gutterBottom sx={{ marginBottom: "15px" }}>
          Favorites
        </Typography>
        <EmptyState value="favorites" />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h5" align="left" gutterBottom sx={{ marginBottom: "15px" }}>
        Favorites
      </Typography>
      <Grid container spacing={2}>
        {productData.map((product, index) => (
          <Grid item xs key={index}>
            <ProductCard product={product} handleFavoriteClick={handleFavoriteClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );

};

export default Favorites;
