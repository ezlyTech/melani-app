
import {
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Container,
  Box,
  Rating,
  TextField,
  Button,
} from "@mui/material"

import { useState } from "react";


const Review = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}
        sx={{
          backgroundColor: "#FFFAF6",
          borderRadius: "15px",
          marginBottom: "8px"
        }}>
        <AccordionSummary
          //  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box sx={{ display: "flex", gap: "1em" }}>
            <img src="/assets/images/products/2.png"
              alt=""
              style={{
                height: "75px",
                width: "106px",
                objectFit: "cover",
                borderRadius: "15px"
              }} />
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Double Choco Cake</Typography>
              <Typography>1x Slice</Typography>
              <Rating /></Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <TextField id="outlined-basic" label="Write a review" variant="outlined" sx={{ width: "100%" }} />
          </Typography>

        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}
        sx={{
          backgroundColor: "#FFFAF6",
          borderRadius: "15px",
          marginBottom: "8px"
        }}>
        <AccordionSummary
          //  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Box sx={{ display: "flex", gap: "1em" }}>
            <img src="/assets/images/products/2.png" alt=""
              style={{
                height: "75px",
                width: "106px",
                objectFit: "cover",
                borderRadius: "15px"
              }} />
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Biscuit Munch</Typography>
              <Typography>1x Slice</Typography>
              <Rating /></Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <TextField id="outlined-basic" label="Write a review" variant="outlined" sx={{ width: "100%" }} />
          </Typography>

        </AccordionDetails>
      </Accordion>

      <Button variant="contained"
        sx={{
          width: "100%",
          borderRadius: "31px",
          objectPosition: "Bottom"
        }}
      >Submit</Button>
    </Container >



  )
}

export default Review