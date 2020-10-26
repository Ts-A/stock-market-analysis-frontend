import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  FormControl,
  TextField,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  form: {
    height: "360px",
  },
});

export const Login = () => {
  const classes = useStyles();
  const [password, setPassword] = useState({
    hidden: true,
    value: "",
  });
  const [mail, setMail] = useState("");
  const handleVisibility = () => {
    setPassword({ ...password, hidden: !password.hidden });
  };
  return (
    <Grid container justify="center" style={{ margin: "20px 0" }}>
      <Paper
        className={classes.form}
        component={Grid}
        container
        item
        xs={10}
        sm={8}
        md={6}
        elevation={4}
      >
        <Typography component={Grid} item xs={12} align="center" variant="h4">
          Account Login
        </Typography>
        <Grid direction="column" container item>
          <FormControl>
            <TextField
              variant="outlined"
              type="email"
              fullWidth
              label="E-Mail ID"
              onChange={(event) => setMail(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              type={password.hidden ? "password" : "text"}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleVisibility}>
                    {password.hidden ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            <FormHelperText>
              {password.hidden ? null : "Password is visible"}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Paper>
    </Grid>
  );
};
