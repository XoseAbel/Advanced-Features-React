import { makeStyles } from '@material-ui/core';
import React, { ReactFragment } from 'react';

interface propsInterface {
  children: string | ReactFragment;
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
