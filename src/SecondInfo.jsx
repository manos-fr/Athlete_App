import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import MainInfo from "./MainInfo";
import Box from "@material-ui/core/Box";

const RATE = 0.07;

const useStyles = makeStyles((theme) => ({
  //   breakpoints: {
  //     values: {
  //       tablet: 640,
  //       laptop: 1024,
  //       desktop: 1280,
  //     },
  //   },
  tableContainer: {
    flexGrow: 1,

    marginRight: 400,
    marginLeft: 5,
    minWidth: 100,
    maxWidth: 800,

    position: "absolut",
  },
  table: {
    minWidth: 150,
    maxWidth: 800,

    flexGrow: 1,
  },
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("First round", 100, 1.15),
  createRow("Second round", 10, 45.99),
  createRow("Third round", 2, 17.99),
];

const Subtotal = subtotal(rows);
const Percent = RATE * Subtotal;
const Total = Percent + Subtotal;

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <Box
      position="relative"
      top={400}
      height={450}
      width="95%"
      marginLeft="1%"
      marginRight="1%"
    >
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
      >
        <Grid item sm={6}>
          <MainInfo />
        </Grid>
        <Grid item sm={6}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                  <TableCell align="right">Tournament</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Matches</TableCell>
                  <TableCell align="right">Minutes</TableCell>
                  <TableCell align="right">Injuries</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.desc}>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.unit}</TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">{ccyFormat(Subtotal)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Consistency</TableCell>
                  <TableCell align="right">{`${(RATE * 100).toFixed(
                    0
                  )} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(Percent)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(Total)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
