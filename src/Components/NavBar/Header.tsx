import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { teal } from "@material-ui/core/colors";
import { Grid, Hidden, Paper, Slide } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { NEWS_ROUTE } from "../../Routes/const";
import { FieldAutocompleted } from "./Components/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import {
  errorFecth,
  startFecth,
  successfulFecth,
} from "../../Redux/autocompleteList/autocompleteSlice";
import { connectWithApi } from "../../api/connectWithApi";
import { GET, LIST_URL } from "../../api/const";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  toolbar: {
    height: "105px",
    borderBottom: `2px solid white`,
    backgroundColor: teal[800],
    color: "white",
  },
  toolbarTitle: {
    flex: 1,
    cursor: "pointer",
  },
  toolbarSecondary: {
    height: "48px",
    backgroundColor: teal[800],
    justifyContent: "space-between",
    overflowX: "auto",
    color: "white",
  },
  toolbarLink: {
    padding: 10,
    flexShrink: 0,
  },
  buttonSearch: {
    position: "fixed",
    padding: 8,
    zIndex: 5,
    borderRadius: 10,
    bottom: 15,
    right: 5,
    color: "white",
    backgroundColor: teal[800],
  },
  toggleSearch: {
    position: "fixed",
    padding: 8,
    zIndex: 4,
    width: "100%",
    bottom: 0,
    right: 0,
    color: "white",
    backgroundColor: teal[800],
  },
});

const title = "NEWS FEED";
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Health", url: "#" },
  { title: "Travel", url: "#" },
];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const classes = useStyles();

  //usehistory para acceder a HOME
  let history = useHistory();
  const goHome = () => {
    history.push(`${NEWS_ROUTE}`);
  };

  //useEffect para llamar a la API y tener los datos de SEARCH
  const dispatch = useDispatch();
  useEffect(() => {
    getAutocompleteList();
  }, []);
  const getAutocompleteList = async () => {
    dispatch(startFecth());
    try {
      //   const result = await connectWithApi('hola', GET);
      const result = await connectWithApi(LIST_URL, GET);
      dispatch(successfulFecth(result));
    } catch (error) {
      dispatch(errorFecth({ code: error.code, message: error.message }));
    }
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid
            item
            xs={12}
            container
            direction='row'
            justify='center'
            alignItems='center'
          >
            <Hidden smDown>
              <Button color='inherit' variant='outlined' size='small'>
                Subscribe
              </Button>
            </Hidden>
            <Typography
              component='h2'
              variant='h4'
              color='inherit'
              align='center'
              noWrap
              className={classes.toolbarTitle}
              onClick={goHome}
            >
              {title}
            </Typography>
            <Hidden xsDown>
              <FieldAutocompleted />
            </Hidden>
          </Grid>
          <Hidden smUp>
            <Grid item xs={12}>
              {showSearch && (
                <Grid item className={classes.toggleSearch}>
                  <Slide
                    direction='left'
                    in={showSearch}
                    mountOnEnter
                    unmountOnExit
                    timeout={700}
                  >
                    <Grid item>
                      <FieldAutocompleted />
                    </Grid>
                  </Slide>
                </Grid>
              )}
              <SearchIcon
                className={classes.buttonSearch}
                onClick={() => setShowSearch(!showSearch)}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        className={classes.toolbarSecondary}
      >
        {sections.map((section: any) => (
          <Link
            color='inherit'
            noWrap
            key={section.title}
            variant='body2'
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

export { Header };
