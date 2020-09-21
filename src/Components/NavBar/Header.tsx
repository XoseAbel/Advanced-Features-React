import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { teal } from '@material-ui/core/colors';
import { Hidden } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { NEWS_ROUTE } from '../../Routes/const';
import { FieldAutocompleted } from './Components/Autocomplete';

const useStyles = makeStyles({
  toolbar: {
    height: '105px',
    borderBottom: `2px solid white`,
    backgroundColor: teal[800],
    color: 'white',
  },
  toolbarTitle: {
    flex: 1,
    cursor: 'pointer',
  },
  toolbarSecondary: {
    height: '48px',
    backgroundColor: teal[800],
    justifyContent: 'space-between',
    overflowX: 'auto',
    color: 'white',
  },
  toolbarLink: {
    padding: 10,
    flexShrink: 0,
  },
});

const title = 'NEWS FEED';
const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Travel', url: '#' },
];

const Header = () => {
  const classes = useStyles();

  //usehistory para acceder a HOME
  let history = useHistory();
  const goHome = () => {
    history.push(`${NEWS_ROUTE}`);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
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
        <Hidden smDown>
          <FieldAutocompleted />
        </Hidden>
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
