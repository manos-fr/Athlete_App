import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const usingStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const columns = [
  { id: "name", label: "Name", minWidth: 50 },
  { id: "Surname", label: "Surname", minWidth: 50 },
  {
    id: "Age",
    label: "Age",
    minWidth: 5,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Height",
    label: "Height",
    minWidth: 50,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Nationality",
    label: "Nationality",
    minWidth: 55,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, Surname, Age, Height, Nationality) {
  return { name, Surname, Age, Height, Nationality };
}
const KEYS = {
  rows: "rows",
  rowsId: "rowsId",
};

const rows = [
  createData("Stef", "Vans", 31, 1.85, "Greek"),
  createData("Maria", "Mainar", 50, 1.81, "Albanian"),
  createData("Evans", "Pathos", 25, 1.87, "Nigerian"),
  createData("Paul", "Mern", 30, 1.75, "English"),
  createData("Gregory", "Voulg", 31, 1.69, "American"),
];
localStorage.setItem(KEYS.rows, JSON.stringify(rows));

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minWidth: 100,
    maxWidth: 600,
    width: "98%",
  },
  container: {
    flexGrow: 1,
    minWidth: 100,
    maxHeight: 300,
    width: "98%",
  },
});

export default function StickyHeadTable() {
  const classes_b = usingStyles();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const [rowPage, addRow] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const handleAddRow = (event) => {
  //   addRow(event.target);
  // };

  return (
    <Grid
      item
      sm={12}
      container
      spacing={3}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.Surname}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid
          className={classes.container}
          container
          spacing={2}
          direction="row"
        >
          <Grid item xs={6}>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Grid>
          <Grid item xs={6}>
            <IconButton
              // onClick={handleAddRow}
              aria-label="add"
              className={classes_b.margin}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
