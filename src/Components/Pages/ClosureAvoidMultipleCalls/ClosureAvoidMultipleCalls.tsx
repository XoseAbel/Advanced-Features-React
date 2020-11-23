import { Grid } from '@material-ui/core';
import React from 'react';
import { MAIN_PAGE } from '../../../Routes/const';
import { ButtonRoute } from '../../ButtonRoute';
import { Description } from '../../Description';
import { Title } from '../../Title';
import useStyles from './ClosureAvoidMultipleCalls.styles';

export const ClosureAvoidMultipleCalls = () => {
  const { main, aLink } = useStyles();

  return (
    <Grid
      container
      className={main}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Title>Multiple calls issue</Title>
      <Description>
        When you have a selector, or similar, to throw a API call (Promise), if
        the user throw more than one event the result should be incorrect and
        React will re-render the component as many times as React needs.
        <br />
        One posible solution for this is using{' '}
        <a
          className={aLink}
          href={'https://developer.mozilla.org/es/docs/Web/JavaScript/Closures'}
          target='blank'
        >
          Closures
        </a>{' '}
        to dismount effects before throw the new API call.
      </Description>

      <ButtonRoute nextRoute={MAIN_PAGE}>Go Main Page</ButtonRoute>
    </Grid>
  );
};
