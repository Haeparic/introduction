import { Drawer } from "@mui/material";
import React from "react";

const MobileNav = ({ setPage, open, setOpen }) => {
  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };
  return (
    <Drawer
      className="mobile"
      variant="persistent"
      anchor="right"
      open={open}
      sx={{ background: "transparent" }}
    >
      <ul className="mobile-menu">
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
      </ul>
    </Drawer>
  );
};

export default MobileNav;
