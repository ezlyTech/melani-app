import {
  Button,
  Modal,
  Box,
  Typography
} from "@mui/material";

import React, { useState } from "react";

const ReviewSubmitted = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          p: 2
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Review Submitted
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your review has been successfully submitted!
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewSubmitted;