import {
  Box,
  Modal,
  Input,
  Rating,
  Button,
  Container,
  Accordion,
  TextField,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material"
import { useParams } from "react-router-dom";
import { useRouter } from "src/routes/hooks";
import axios from "axios"
import { useEffect, useState } from "react";

const Review = () => {
  const [itemData, setItemData] = useState()
  const [reviewData, setReviewData] = useState()
  const [expanded, setExpanded] = useState(["panel1", "panel2", "panel3"]);
  const { receiptNo } = useParams()
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? [...expanded, panel] : expanded.filter((p) => p !== panel));
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/home");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await axios.get(`http://localhost:3031/api/reviews/${receiptNo}`)
        console.log(items.data)
        setItemData(items.data)

        const reviewDataFormat = items.data.map((item) => ({
          itemID: item.id,
          itemName: item.name,
          customerName: sessionStorage.getItem("username"),
          review: null,
        }))

        console.log(reviewDataFormat)

        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [receiptNo])

  return (
    <Container>
      <Container sx={{ background: "#888c05", p: 2, borderRadius: "1em" }}>
        <Typography variant="caption" color='#FFF'>
          Thank you for choosing <b> Melani&apos;s Bakehouse! </b> We&apos;re crafting a sweet surprise just for you. How was your ordering experience? <br /> <br />
          <b> Share your thoughts and help us sprinkle more joy into each order! 🍰</b>
        </Typography>
      </Container>
      {!isLoading && <>
        {itemData.map((item, i) => (
          <Accordion
            expanded={expanded.includes("panel1")}
            onChange={handleChange("panel1")}
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
                <img src={item.image}
                  alt=""
                  style={{
                    height: "75px",
                    width: "106px",
                    objectFit: "cover",
                    borderRadius: "15px"
                  }} />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
                  <Rating sx={{ mt: "0.5em" }} /></Box>
              </Box>

            </AccordionSummary>

            <AccordionDetails>
              <Typography>
                <TextField
                  id="outlined-basic"
                  label="Write a review"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Typography>

              <Button component="label" sx={{ color: "#000000", top: "4px" }}>
                Upload Photo
                <Input type="file" style={{ display: "none" }} />
              </Button>

            </AccordionDetails>
          </Accordion>
        ))}
      </>}

      <Button onClick={handleOpen} variant="contained" color="primary"
        sx={{
          mt: 2,
          width: "100%",
          borderRadius: "31px",
        }}>
        Submit
      </Button>
      <Button variant="outlined" color="primary"
        sx={{
          mt: 1,
          width: "100%",
          borderRadius: "31px",
        }}
        onClick={handleSubmit}
      >
        Remind me later
      </Button>



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xs: "90%",
              sm: "70%",
              md: "60%",
              lg: "50%"
            },
            height: {
              xs: "60%",
              sm: "50%",
              md: "40%",
              lg: "35%"
            },
            bgcolor: "background.paper",
            p: 2,
            borderRadius: "10px",
            overflow: "hidden",
          }}>
          <Box
            id="modal-modal-title"
            sx={{
              mb: {
                xs: "16px",
                md: "22px"
              }
            }}>
            <img src="/assets/images/checkmark.png" alt="" style={{ width: "100%" }} />
          </Box>
          <Typography
            id="modal-modal-description"
            variant="h6"
            component="h2"
            sx={{
              mb: {
                xs: "24px",
                md: "40px"
              }
            }}>
            Review Submitted!
          </Typography>
          <Button onClick={handleClose} variant="contained"
            sx={{
              width: "100%",
              borderRadius: "31px",
              color: "#FFF",
            }} >
            Back to Main Menu
          </Button>
        </Box>
      </Modal>

    </Container>

  )
}

export default Review