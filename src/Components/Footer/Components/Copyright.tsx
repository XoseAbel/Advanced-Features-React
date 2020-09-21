import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  copyright: {
    fontSize: 11,
  },
});

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant='subtitle1' className={classes.copyright}>
      {'© '}
      2020 MyCompany. All rights reserved.
    </Typography>
  );
}

export { Copyright };
