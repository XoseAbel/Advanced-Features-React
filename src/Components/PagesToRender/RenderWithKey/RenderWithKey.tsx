import { Button, Grid, makeStyles } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import React, { useState } from 'react';
import { MAIN_PAGE } from '../../../Routes/const';
import { ButtonRoute } from '../../ButtonRoute';
import { Description } from '../../Description';
import { Title } from '../../Title';
import { Counter } from './Counter';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: teal[50],
    width: '100%',
    marginBottom: 15,
    paddingTop: 15,
    paddingBottom: 10,
    color: teal[700],
    fontFamily: 'Works Sans',
  },
});

const RenderWithKey = () => {
  const { main } = useStyles();

  // generate key to re-reset
  const [key, setKey] = useState(new Date().getTime());

  return (
    <Grid
      container
      className={main}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Title>Re-Render element using a key</Title>
      <Description>
        When you have a component with a concrete functionality and you need to
        reset the component in an upper level you can use the React key to
        re-render the full component.
        <br />
        In that case we use a state and new Date to generate a new key that
        re-render React Element
      </Description>
      <Button onClick={() => setKey(new Date().getTime())}>
        Reset Counter Area
      </Button>
      <Counter key={key} />
      <ButtonRoute nextRoute={MAIN_PAGE}>Go Main Page</ButtonRoute>
    </Grid>
  );
};
export { RenderWithKey };
