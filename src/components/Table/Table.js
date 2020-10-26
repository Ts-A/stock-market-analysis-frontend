import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const createTableHeader = (dataHeader) =>
  dataHeader.map((item) => <TableCell key={item}>{item}</TableCell>);

export const BasicTable = (props) => {
  const { tableHeaders, tableData } = props.table;
  const TableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          {tableHeaders ? createTableHeader(tableHeaders) : null}
        </TableRow>
      </TableHead>
    );
  };
  const TableContent = () => {
    const mappedCell = tableData
      ? tableData.map((item) => (
          <TableRow key={item}>
            {item.map((i, index) =>
              index === 0 ? (
                <TableCell key={i}>{i}</TableCell>
              ) : (
                <TableCell align="center" key={i}>
                  {i}
                </TableCell>
              )
            )}
          </TableRow>
        ))
      : null;
    return <TableBody>{mappedCell}</TableBody>;
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="table">
        <TableHeader />
        <TableContent />
      </Table>
    </TableContainer>
  );
};
