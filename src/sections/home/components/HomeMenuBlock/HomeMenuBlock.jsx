import {
  Grid,
  Box,
} from "@mui/material";
import { ProductCard, TitleTypography } from "src/components"
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios"

const HomeMenuBlock = ({ title, categoryID }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get(`http://localhost:3031/api/items/${categoryID}`)
        setProducts(productData.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [categoryID])


  return (
    !isLoading &&
    <Box sx={{ mb: 6 }}>
      <TitleTypography value={title} hasBtn />

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

HomeMenuBlock.propTypes = {
  title: PropTypes.string,
  categoryID: PropTypes.string
};

export default HomeMenuBlock;
