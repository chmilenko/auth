import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import Authenication from "../Components/Authenication";
import Registration from "../Components/Registration";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "53.6vh",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  outline: "none",
};

export default function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isRegistrationModalOpened, setIsRegistrationModalOpened] =
    useState(false);
  return (
    <div className="modal-auth-reg">
      <Button onClick={handleOpen}>Войти</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isRegistrationModalOpened ? (
            <Registration
              setIsRegistrationModalOpened={setIsRegistrationModalOpened}
            />
          ) : (
            <Authenication
              setIsRegistrationModalOpened={setIsRegistrationModalOpened}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
