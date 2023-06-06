import { Grid } from "@mui/material";
import React from "react";
import NavItem from "./NavItem";

const Nav = ({ navItems }) => {
  return (
    <Grid item xs={2.5} sx={{ boxShadow: 1 }}>
      <NavItem items={navItems} />
    </Grid>
  );
};

export default Nav;
