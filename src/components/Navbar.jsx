import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Menu, MenuItem } from "@mui/material";
import { addUser } from "../db/firebase.db";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "12px",
  };
  function handleSignIn() {
    handleOpen();
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // You can submit this data to your backend or perform other actions here
    const { payload } = await addUser(formData);
    localStorage.setItem("token", JSON.stringify(payload));
    toast.success("User sign in successfuly.");
    setToShow(true);
    handleClose();
  };
  const [toShow, setToShow] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToShow(true);
    } else {
      setToShow(false);
    }
  }, []);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  function handleLogout() {
    localStorage.clear();
  }

  const token = localStorage.getItem("token");
  function handleRedirection() {
    navigate("/profile");
  }

  return (
    <>
      <div className="bg-black px-8 py-3 flex justify-between items-center">
        <div className="flex gap-24 items-center w-[70%]">
          <h2 className="text-2xl font-bold text-white">ABC CORP </h2>
          <input
            value={searchText}
            type="text"
            placeholder="Search any Course"
            className="w-[35%] px-4 py-1 rounded-md "
          ></input>
        </div>
        {toShow === true ? (
          <AccountCircleIcon
            className="text-white w-[35px] "
            onClick={handleMenuOpen}
          />
        ) : (
          <button
            className="bg-blue px-4 py-1 text-white font-medium rounded-md outline-none "
            onClick={handleSignIn}
          >
            Sign Up/Log In
          </button>
        )}
      </div>
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        className=""
      >
        {token ? (
          <MenuItem
            style={{
              height: "2rem",
            }}
            sx={{ backgroundColor: "white !important" }}
            onClick={() => handleRedirection()}
          >
            <span
              style={{
                color: "#262626",
                fontWeight: "500",
                fontSize: "12px",
              }}
              className=""
            >
              Profile
            </span>
          </MenuItem>
        ) : (
          ""
        )}

        <MenuItem
          style={{
            height: "2rem",
          }}
          sx={{ backgroundColor: "white !important" }}
          onClick={handleLogout}
        >
          <div style={{ paddingRight: ".5rem", height: "1.4rem" }}>
            <LogoutIcon />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#262626",
                fontWeight: "500",
                fontSize: "12px",
              }}
              className=" "
            >
              Logout
            </span>
          </div>
        </MenuItem>
      </Menu>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center mb-2">
            <Typography
              id="modal-modal-title text-2xl font-medium "
              variant="h6"
              component="h2"
            >
              Please Log In to Continue
            </Typography>
            <CloseIcon className="cursor-pointer" onClick={handleClose} />
          </div>
          <Divider />

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <label className="block mb-4">
                <span className="text-gray-700">Name:</span>
                <input
                  className="form-input mt-1 block w-full border  px-3 py-2 rounded-md"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Email:</span>
                <input
                  className="form-input mt-1 block w-full border px-3 py-2 rounded-md"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Phone Number:</span>
                <input
                  className="form-input mt-1 block w-full border  px-3 py-2 rounded-md"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </label>
              <button
                type="submit"
                className="bg-blue w-full text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
