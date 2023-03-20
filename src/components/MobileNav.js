import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "@mui/material";
import React from "react";

const MobileNav = ({ setPage, open, setOpen, toggleDrawer }) => {
  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };
  return (
    <Drawer
      className="mobile"
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      // hideBackdrop="false"
    >
      <ul className="mobile-menu">
        <li onClick={() => setOpen(false)}>
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </li>
        <li
          onClick={() => {
            setPage(0);
            setOpen(false);
          }}
        >
          <span>Home</span>
        </li>
        <li
          onClick={() => {
            setPage(1);
            setOpen(false);
          }}
        >
          <span>Profile</span>
        </li>
        <li
          onClick={() => {
            setPage(2);
            setOpen(false);
          }}
        >
          <span>Portfolio</span>
        </li>
        <li
          onClick={() => {
            setPage(3);
            setOpen(false);
          }}
        >
          <span>More</span>
        </li>
        <li
          onClick={() => {
            setPage(4);
            setOpen(false);
          }}
        >
          <span>Contact</span>
        </li>
      </ul>
    </Drawer>
  );
};

export default MobileNav;
