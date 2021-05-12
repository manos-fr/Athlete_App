import React from "react";
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

const rows = [
  createData("Stef", "Voulg", 31, 1.85, "Greek"),
  createData("Maria", "Voulg", 50, 1.81, "Albanian"),
  createData("Evans", "Voulg", 25, 1.87, "Nigerian"),
  createData("Paul", "Voulg", 30, 1.75, "English"),
  createData("Gregory", "Voulg", 31, 1.69, "American"),
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minWidth: 100,
    maxWidth: 500,
    width: "100%",
  },
  container: {
    flexGrow: 1,
    minWidth: 100,
    maxHeight: 300,
    width: "100%",
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid
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
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  );
}
