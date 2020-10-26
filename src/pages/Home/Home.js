import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, Divider } from "@material-ui/core";
import { BasicTable } from "../../components/Table";
import { APIservice } from "../../api.service";

const jsonDecoder = (jsonData) => {
  const tableHeaders = Object.keys(jsonData[0]);
  const tableData = jsonData.map((item) => Object.values(item));
  return { tableHeaders, tableData };
};

export const Home = () => {
  const [topGainers, setTopGainers] = useState({
    tableHeaders: "",
    tableData: "",
  });
  const [topLosers, setTopLosers] = useState({
    tableHeaders: "",
    tableData: "",
  });
  const [indices, setIndices] = useState({ tableHeaders: "", tableData: "" });
  const [marketAction, setMarketAction] = useState({
    tableHeaders: "",
    tableData: "",
  });
  const [active, setActive] = useState({ tableHeaders: "", tableData: "" });
  const [potential, setPotential] = useState({
    tableHeaders: "",
    tableData: "",
  });
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, [
    topGainers,
    topLosers,
    indices,
    marketAction,
    active,
    potential,
  ]);
  const getData = async () => {
    try {
      const resultTopGainers = await APIservice.getTopGainers();
      setTopGainers(jsonDecoder(resultTopGainers));
      const resultTopLosers = await APIservice.getTopLosers();
      setTopLosers(jsonDecoder(resultTopLosers));
      const resultMarketAction = [{}];
      setMarketAction(jsonDecoder(resultMarketAction));
      const resultIndices = [{}];
      setIndices(jsonDecoder(resultIndices));
      const resultActiveStocks = await APIservice.getMostActive();
      setActive(jsonDecoder(resultActiveStocks));
      const resultUpPotential = await APIservice.getUpwardPotential();
      setPotential(jsonDecoder(resultUpPotential));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          component={"h3"}
          variant="h3"
          color="primary"
          style={{ margin: "20px 0 5px 0" }}
          align="center"
        >
          Market Action
        </Typography>
        <Divider
          style={{
            margin: "0 auto 10px auto",
            width: "70%",
            maxWidth: "400px",
          }}
        />
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center">
              TOP GAINERS
            </Typography>
            <BasicTable table={topGainers} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center">
              TOP LOSERS
            </Typography>
            <BasicTable table={topLosers} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center">
              INDICES
            </Typography>
            <BasicTable table={indices} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center">
              MARKET ACTION
            </Typography>
            <BasicTable table={marketAction} />
          </Grid>
        </Grid>
        <Typography
          component={"h3"}
          variant="h3"
          color="primary"
          style={{ margin: "20px 0 5px 0" }}
          align="center"
        >
          Stock Action
        </Typography>
        <Divider
          style={{
            margin: "0 auto 10px auto",
            width: "70%",
            maxWidth: "400px",
          }}
        />
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center">
              ACTIVE STOCKS
            </Typography>
            <BasicTable table={active} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center">
              UPWARD POTENTIAL
            </Typography>
            <BasicTable table={potential} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
