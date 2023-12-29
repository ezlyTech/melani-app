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
  Modal,
  Input

} from "@mui/material"

import { useState } from "react";

const Review = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}
        sx={{
          borderRadius: "15px",
          marginBottom: "8px"
        }}>
        <AccordionSummary
          //  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box sx={{ display: "flex", gap: "1em" }}>
            <img src="/assets/images/products/1.png"
              alt=""
              style={{
                height: "75px",
                width: "106px",
                objectFit: "cover",
                borderRadius: "15px"
              }} />
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Double Choco</Typography>
              <Typography>1x Slice</Typography>
              <Rating /></Box>
          </Box>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <TextField id="outlined-basic" label="Write a review" variant="outlined" sx={{ width: "100%" }} />
          </Typography>

          <Button component="label" sx={{ color: "#000000", top: "4px" }}>
            Upload Photo
            <Input type="file" style={{ display: "none" }} />
          </Button>

        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}
        sx={{
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

          <Button component="label" sx={{ color: "#000000", top: "4px" }}>
            Upload Photo
            <Input type="file" style={{ display: "none" }} />
          </Button>

        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}
        sx={{
          borderRadius: "15px",
          marginBottom: "8px"
        }}>
        <AccordionSummary
          //  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box sx={{ display: "flex", gap: "1em" }}>
            <img src="/assets/images/products/3.png"
              alt=""
              style={{
                height: "75px",
                width: "106px",
                objectFit: "cover",
                borderRadius: "15px"
              }} />
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Red Velvet</Typography>
              <Typography>1x Slice</Typography>
              <Rating /></Box>
          </Box>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <TextField id="outlined-basic" label="Write a review" variant="outlined" sx={{ width: "100%" }} />
          </Typography>

          <Button component="label" sx={{ color: "#000000", top: "4px" }}>
            Upload Photo
            <Input type="file" style={{ display: "none" }} />
          </Button>

        </AccordionDetails>
      </Accordion>



      <Button onClick={handleOpen} variant="contained" color="primary"
        sx={{
          width: "90%",
          borderRadius: "31px",
          position: "fixed",
          bottom: "20px",
          objectPosition: "Bottom"
        }}>
        Submit
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          height: "48%",
          bgcolor: "background.paper",
          p: 2,
          borderRadius: "10px",
        }}>
          <Box id="modal-modal-title" sx={{ mb: "22px" }}> <img src="/assets/images/checkmark.png" alt="" /> </Box>
          <Typography id="modal-modal-description" variant="h6" component="h2" sx={{ mb: "40px" }}>
            Review Submitted!
          </Typography>
          <Button onClick={handleClose} variant="outlined"
            sx={{
              top: "8%",
              borderRadius: "31px",
              width: "100%",
              color: "#000000"
            }} >
            Back to Main Menu
          </Button>
        </Box>
      </Modal>

    </Container >

  )
}

export default Review