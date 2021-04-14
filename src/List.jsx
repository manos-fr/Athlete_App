import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 120,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'lightgrey',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {[0, 1,].map((sectionId) => (
        <li key={``} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{` Men`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={1}>
                <ListItemText primary={'Category'} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
