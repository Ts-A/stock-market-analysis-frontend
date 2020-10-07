import React from 'react'
import {
  AppBar,
  Typography
} from '@material-ui/core';

export const Footer = () => {
  return (
    <AppBar position="static" style={{margin:"50px 0 0"}}>
      <Typography variant="h2" style={{minHeight:"400px"}} component={"div"} align="center">
        Footer 
      </Typography>
    </AppBar>
  )
}