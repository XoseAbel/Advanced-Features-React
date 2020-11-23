import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './MainPage.styles';
import { Title } from '../../Title';
import { Description } from '../../Description';
import { ButtonRoute } from '../../ButtonRoute';
import {
  USE_LAYOUT_EFFECT,
  RENDER_WITH_KEY,
  CLOSURE_AVOID_MULTIPLE_CALLS,
} from '../../../routes2/const';

export default () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.main}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Title>React Advance Features</Title>
      <Description>
        In this page, we like to show some special resources/tricks to improve
        the performance of your React app, and some explanations about how works
        the advanced Hooks.
      </Description>
      <Grid
        item
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
      >
        <ButtonRoute nextRoute={USE_LAYOUT_EFFECT}>useLayoutEffect</ButtonRoute>
        <ButtonRoute nextRoute={RENDER_WITH_KEY}>
          reset component using key
        </ButtonRoute>
        <ButtonRoute nextRoute={CLOSURE_AVOID_MULTIPLE_CALLS}>
          multiple calls to API
        </ButtonRoute>
      </Grid>
    </Grid>
  );
};
