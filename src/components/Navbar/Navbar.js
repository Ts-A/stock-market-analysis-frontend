import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ShowChartIcon from '@material-ui/icons/ShowChart';

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
          <IconButton edge="start" href="/" className={classes.menuButton} color="inherit" aria-label="menu">
            <ShowChartIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Stock Market Analysis
          </Typography>
          <Button>
            <Typography variant="button" style={{color:"#eee"}}>
              Option1
            </Typography>
          </Button>
          <Button>
            <Typography variant="button" style={{color:"#eee"}}>
              Option2
            </Typography>
          </Button>
          <Button>
            <Typography variant="button" style={{color:"#eee"}}>
              Option3
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
