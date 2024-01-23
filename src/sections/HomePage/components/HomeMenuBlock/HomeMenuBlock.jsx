import {
  Grid,
  Box,
  CircularProgress
} from "@mui/material";
import { ProductCard, TitleTypography } from "src/components"
import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import UserContext from "src/UserContext";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const HomeMenuBlock = ({ title, category }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdated, setIsUpdated] = useState(false)
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

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
    const fetchData = async () => {
      const userData = JSON.parse(sessionStorage.getItem("userData"))
      try {
        const APIParams =
          sessionStorage.getItem("isAuthenticated")
            ? `${category.category_id}/${userData.email}`
            : `${category.category_id}`

        const productData = await axios.get(
          `http://localhost:3031/api/items/category/${APIParams}`
        )
        setProducts(productData.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [category, isUpdated, isAuthenticated])

  return (
    <Box sx={{ mb: 6 }}>
      <TitleTypography value={category.name} hasBtn onClick={() => navigate(`/product-list/${category.name}/${category.category_id}`)} />

      {isLoading && (
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <CircularProgress variant="indeterminate" />
        </Box>
      )}

      {!isLoading && (
        <Grid container spacing={2} sx={{ width: { md: "fit-content" } }}>
          {products.slice(0, 4).map((product, index) => (
            <Grid item xs key={index}>
              <ProductCard product={product} handleFavoriteClick={handleFavoriteClick} />
            </Grid>
          ))}
        </Grid>
      )
      }
    </Box >
  )
}

HomeMenuBlock.propTypes = {
  title: PropTypes.string,
  category: PropTypes.object
};

export default HomeMenuBlock;