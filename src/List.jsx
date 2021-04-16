import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    flexGrow: 1,
    width: "100%",
    maxWidth: 95,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    maxHeight: 300,
  },
  listSection: {
    flexGrow: 1,
    backgroundColor: "inherit",
  },
  ul: {
    flexGrow: 1,
    backgroundColor: "inherit",
    padding: 0,
    marginLeft: -7,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <Box position="absolute" top={70} left="0.5%">
      <List className={classes.root} subheader={<li />}>
        {[0].map((sectionId) => (
          <li key={``} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{` Men`}</ListSubheader>
              {[0, 1].map((item) => (
                <ListItem key={1}>
                  <ListItemText primary={"Category"} />
                </ListItem>
              ))}
              <ListSubheader>{` Women`}</ListSubheader>
              {[0, 1].map((item) => (
                <ListItem key={1}>
                  <ListItemText primary={"Category"} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Box>
  );
}
