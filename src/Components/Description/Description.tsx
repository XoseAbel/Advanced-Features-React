import classes from '*.module.css';
import { makeStyles } from '@material-ui/core';
import React from 'react';

interface propsInterface {
  children: string;
}

const useStyles = makeStyles(() => ({
  textArea: {
    padding: '5px 25px',
  },
}));

const Description = (props: propsInterface) => {
  const { textArea } = useStyles();
  return <p className={textArea}>{props.children}</p>;
};
export { Description };
