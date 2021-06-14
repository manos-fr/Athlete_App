import React, { useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  InputBase,
  Typography,
  Box,
  Button,
  Menu,
  Grid,
  Toolbar,
} from "@material-ui/core";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import OpenMenu from "./OpenMenu";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#D56616",
    flexGrow: 1,
  },
  root1: {
    backgroundColor: "#F5F5F5",
    flexGrow: 1,
    minWidth: 100,
    maxWidth: 600,
    width: "98%",
  },
  container: {
    backgroundColor: "#F0FFFF",
    flexGrow: 1,
    minWidth: 100,
    maxHeight: 300,
    width: "98%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "10ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [term, setTerm] = useState("Tennis");
  const [anchorEl, setAnchorEl] = useState(null);
  const [results, setResults] = useState([]);
  const classes = useStyles();
  const StyledMenu = withStyles({
    paper: {
      backgroundColor: "#FFE4C4",
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  // const StyledMenuItem = withStyles((theme) => ({
  //   root: {
  //     "&:focus": {
  //       backgroundColor: theme.palette.action.active,
  //       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
  //         color: theme.palette.common.white,
  //       },
  //     },
  //   },
  // }))(MenuItem);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          srsearch: term,
          utf8: "",
          origin: "*",
          format: "json",
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderedResults = results.map((result) => {
    return (
      <Grid container>
        <div>
          <Button href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            {result.title}
          </Button>
        </div>
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      <Box>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <OpenMenu />
            </IconButton>
            <Typography className={classes.title} variant="h4" noWrap>
              Athlete's Statistics
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                autoComplete="true"
                value={term}
                onClick={handleClick}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <Grid className={classes.container} item xs={12}>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {renderedResults}
                </StyledMenu>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
