import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '120%',
    maxWidth: 120,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <Box
        position="absolute"
        top={85}
        left="1%"
      >
        <List className={classes.root} subheader={<li />}>
          {[0, 1,].map((sectionId) => (
              <li key={``} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>{` Men`}</ListSubheader>
                {[0, 1].map((item) => (
                    <ListItem key={1}>
                    <ListItemText primary={'Category'} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
    </Box>
  );
}
