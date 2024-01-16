import {
  Grid,
  Box,
  CircularProgress
} from "@mui/material";
import { ProductCard, TitleTypography } from "src/components"
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const HomeMenuBlock = ({ title, category }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get(`http://localhost:3031/api/items/list/${category.category_id}`)
        setProducts(productData.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [category])


  return (
    <>
      {isLoading && (
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <CircularProgress variant="indeterminate" />
        </Box>
      )}
      
      
      {!isLoading &&(
        <Box sx={{ mb: 6 }}>
          <TitleTypography value={category.name} hasBtn onClick={() => navigate(`/product-list/${category.name}/${category.category_id}`)} />
  
          <Grid container spacing={2} sx={{width: { md: "fit-content"}}}>
            {products.map((product, index) => (
              <Grid item xs key={index}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/product-detail/${product.product_id}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      navigate(`/product-detail/${product.product_id}`)
                    }
                  }}
                >
                  <ProductCard product={product} />
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      
    </>
  )
}

HomeMenuBlock.propTypes = {
  title: PropTypes.string,
  category: PropTypes.object
};

export default HomeMenuBlock;
