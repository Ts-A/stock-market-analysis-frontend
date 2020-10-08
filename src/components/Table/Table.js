import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

const createTableHeader = ( dataHeader => dataHeader.map( item => <TableCell key={item} align="center">{item}</TableCell> ));

export const BasicTable = ( props ) => {
  const { tableHeaders, tableData } = props.table;
  const TableHeader = () => {
    return(
      <TableHead>
        <TableRow>
          {createTableHeader(tableHeaders)}
        </TableRow>
      </TableHead>
    )
  }
  const TableContent = () => {
    const mappedCell = tableData.map( item => 
      <TableRow key={item}>
        {item.map( i => <TableCell key={i}>{i}</TableCell> )}
      </TableRow>) 
    return(
      <TableBody>
        {mappedCell}
      </TableBody>
    )
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="table">
        <TableHeader />
        <TableContent />
      </Table>
    </TableContainer>
  );
}
