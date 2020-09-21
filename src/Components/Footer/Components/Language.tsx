import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  divider: {
    width: 28,
    border: '2px solid black',
    marginTop: 4,
  },
  language: {
    borderRadius: 0,
    border: '1px solid black',
    marginTop: 10,
    width: 150,
  },
});

const LANGUAGES = [
  {
    code: 'es-ES',
    name: 'Spanish',
  },
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

const Language = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h6' component='h6' gutterBottom>
        LANGUAGE
      </Typography>
      <div className={classes.divider}></div>
      <Select native className={classes.language}>
        {LANGUAGES.map(language => (
          <option value={language.code} key={language.code}>
            {language.name}
          </option>
        ))}
      </Select>
    </>
  );
};
export { Language };
