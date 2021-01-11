import { Button, makeStyles } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: teal[700],
    color: 'white',
    fontSize: '0.95rem',
    padding: '5px 10px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: teal[900],
    },
  },
  counterArea: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  buttonArea: {
    padding: '10px',
    borderRadius: '5px',
    border: `2px solid ${teal[900]}`,
  },
}));

function Counter() {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((pre) => pre + 1);
  };

  const dec = () => {
    setCount((pre) => pre - 1);
  };

  return (
    <div className={classes.counterArea}>
      <span></span>
      <span className={classes.buttonArea}>
        <Button className={classes.button} onClick={inc}>
          Inc
        </Button>
        <p>{count}</p>
        <Button className={classes.button} onClick={dec}>
          Dec
        </Button>
      </span>
      <span></span>
    </div>
  );
}
export { Counter };
