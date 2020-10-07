import React from 'react';
import {
  Grid,
  Container, Typography, Divider
} from '@material-ui/core'
import { BasicTable } from '../../components/Table';

export const Home = () => {
  return(
    <div>
      <Container maxWidth="lg">
        <Typography component={"h3"} variant="h3" color="primary" style={{margin:"20px 0 5px 0"}} align="center">Market Action</Typography>
        <Divider style={{margin:"0 auto 10px auto",width:"70%",maxWidth:"400px"}} />
        <Grid container justify="center" spacing={1}> 
          <Grid item xs={12} md={6}>
            <BasicTable />
          </Grid>
          <Grid item xs={12} md={6}>
            <BasicTable />
          </Grid>          
          <Grid item sm={12} md={8}>
            <BasicTable />
          </Grid>
        </Grid>
        <Typography component={"h3"} variant="h3" color="primary" style={{margin:"20px 0 5px 0"}} align="center">Stock Action</Typography>
        <Divider style={{margin:"0 auto 10px auto",width:"70%",maxWidth:"400px"}} />
        <Grid container justify="center" spacing={1}> 
          <Grid item xs={12} md={6}>
            <BasicTable />
          </Grid>
          <Grid item xs={12} md={6}>
            <BasicTable />
          </Grid>          
        </Grid>
      </Container>  
    </div>
  )
}