
import {
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  Container,
  Box,
  Rating,
} from "@mui/material"

import { useState } from "react";


const Review = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} sx={{ backgroundColor: "#FFFAF6", borderRadius: 15 }}>
        <AccordionSummary
          //  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box sx={{ display: "flex", gap: "1em" }}>
            <img src="/assests/images/products/2.png"
              alt=""
              style={{
                height: "75px",
                width: "106px",
                objectFit: "cover"
              }} />
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Double Choco Cake</Typography>
              <Typography>1x Slice</Typography>
              <Rating /></Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} sx={{ backgroundColor: "#FFFAF6" }}>
        <AccordionSummary
          //  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Box sx={{ display: "flex", gap: "1em" }}>
            <img src="/assests/images/products/2.png" alt="" style={{ height: "75px", width: "106px", objectFit: "cover" }} />
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Biscuit Munch</Typography>
              <Typography>1x Slice</Typography>
              <Rating /></Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container >
  )
}

export default Review