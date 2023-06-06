import { CircularProgress, Grid } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../Nav";
import navItems from "./data";

const Dashboard = () => {
  return (
    <Grid container height="100vh">
      <Nav navItems={navItems} />
      <Grid
        item
        xs={8}
        justifyItems="center"
        sx={{ maxWidth: 600, margin: "auto", overflowY: "scroll" }}>
        <Suspense fallback={<CircularProgress />}>
          <Outlet />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
