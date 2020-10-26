import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="center" className={classes.title}>
            <IconButton
              href="/"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ShowChartIcon />
            </IconButton>
            Stock Market Analysis
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
