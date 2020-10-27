import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import { BasicTable } from "../../components/Table";
import { APIservice } from "../../api.service";
import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";

const jsonDecoder = (jsonData) => {
  const tableHeaders = Object.keys(jsonData[0]);
  const tableData = jsonData.map((item) => Object.values(item));
  return { tableHeaders, tableData };
};

export const Home = () => {
  const [dataCount, setDataCount] = useState({ indexCount: 0, stockCount: 0 });
  const [skipMA, setSkipMA] = useState(0);
  const [skipIndex, setSkipIndex] = useState(0);
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
  }, [skipMA, skipIndex]);
  useEffect(() => {}, [
    topGainers,
    topLosers,
    indices,
    marketAction,
    active,
    potential,
    dataCount,
    skipMA,
    skipIndex,
  ]);
  const getData = async () => {
    try {
      const resultCount = await APIservice.getCount();
      setDataCount(resultCount);
      const resultTopGainers = await APIservice.getTopGainers();
      setTopGainers(jsonDecoder(resultTopGainers));
      const resultTopLosers = await APIservice.getTopLosers();
      setTopLosers(jsonDecoder(resultTopLosers));
      const resultMarketAction = await APIservice.getMarketAction(skipMA);
      setMarketAction(jsonDecoder(resultMarketAction));
      const resultIndices = await APIservice.getIndices(skipIndex);
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
              <IconButton
                disabled={!Boolean(skipIndex)}
                onClick={() => setSkipIndex((prev) => prev - 10)}
              >
                <KeyboardArrowLeftRoundedIcon />
              </IconButton>
              INDICES
              <IconButton
                disabled={dataCount.indexCount - skipIndex < 10}
                onClick={() => setSkipIndex((prev) => prev + 10)}
              >
                <KeyboardArrowRightRoundedIcon />
              </IconButton>
            </Typography>
            <BasicTable table={indices} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              display="block"
              component="h5"
              align="center"
            >
              <IconButton
                disabled={!Boolean(skipMA)}
                onClick={() => setSkipMA((prev) => prev - 10)}
              >
                <KeyboardArrowLeftRoundedIcon />
              </IconButton>
              MARKET ACTION
              <IconButton
                disabled={dataCount.stockCount - skipIndex < 10}
                onClick={() => setSkipMA((prev) => prev + 10)}
              >
                <KeyboardArrowRightRoundedIcon />
              </IconButton>
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
