import React from 'react';
import {
  Grid,
  Container, Typography, Divider
} from '@material-ui/core'
import { BasicTable } from '../../components/Table';
import activeStockJson from '../../data/activeStock.json';
import indianIndicesJson from '../../data/indianIndices.json';
import topGainersJson from '../../data/topGainers.json';
import topLosersJson from '../../data/topLosers.json';

const jsonDecoder = ( jsonData ) => {
  const tableHeaders = Object.keys(jsonData[0]);
  const tableData = jsonData.map( item => Object.values(item) );
  return { tableHeaders, tableData};
}

jsonDecoder(activeStockJson.activeStock);
jsonDecoder(indianIndicesJson.indianIndices);
jsonDecoder(topGainersJson.topGainers);
jsonDecoder(topLosersJson.topLosers);

export const Home = () => {
  return(
    <div>
      <Container maxWidth="lg">
        <Typography component={"h3"} variant="h3" color="primary" style={{margin:"20px 0 5px 0"}} align="center">Market Action</Typography>
        <Divider style={{margin:"0 auto 10px auto",width:"70%",maxWidth:"400px"}} />
        <Grid container justify="center" spacing={1}> 
          <Grid item xs={12} md={6}>
            <BasicTable table={jsonDecoder(activeStockJson.activeStock)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BasicTable table={jsonDecoder(indianIndicesJson.indianIndices)} />
          </Grid>          
        </Grid>
        <Typography component={"h3"} variant="h3" color="primary" style={{margin:"20px 0 5px 0"}} align="center">Stock Action</Typography>
        <Divider style={{margin:"0 auto 10px auto",width:"70%",maxWidth:"400px"}} />
        <Grid container justify="center" spacing={1}> 
          <Grid item xs={12} md={6}>
            <BasicTable table={jsonDecoder(topLosersJson.topLosers)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BasicTable table={jsonDecoder(topGainersJson.topGainers)}  />
          </Grid>          
        </Grid>
      </Container>  
    </div>
  )
}