import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core';
import { connectWithApi } from '../../../api/connectWithApi';
import { GET, LIST_URL } from '../../../api/const';
import { useHistory } from 'react-router-dom';
import { NEWS_ROUTE } from '../../../Routes/const';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAutocompleteData,
  selectAutocompleteError,
  selectAutocompleteLoading,
} from '../../../Redux/autocompleteList/selectors';
import {
  errorFecth,
  startFecth,
  successfulFecth,
} from '../../../Redux/autocompleteList/autocompleteSlice';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  main: {
    '& > *': { borderRadius: 10 },
  },
  content: {
    width: 250,
    borderRadius: 10,
    border: '2px solid white',
    '&:hover': {
      borderRadius: 10,
      border: '0px solid white',
    },
    '& > *': {
      color: 'white',
      '&:hover': {
        borderRadius: 10,
        border: '2px solid white',
      },
    },
  },
});

const FieldAutocompleted = () => {
  const classes = useStyles();

  //definimos dispath y selectores
  const dispatch = useDispatch();
  const autoLoading = useSelector(selectAutocompleteLoading);
  const autocompleteData = useSelector(selectAutocompleteData);
  const autocompleteError = useSelector(selectAutocompleteError);

  //useEffect para llamar a la API
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

  const history = useHistory();
  const handleAutocomplete = (event: any, newValue: any | null) => {
    if (newValue) {
      //   console.log(newValue._id);
      history.push(`${NEWS_ROUTE}/${newValue._id}`);
    }
  };

  return (
    <>
      {autoLoading || (!autocompleteData && !autocompleteError) ? (
        <Skeleton animation='wave' variant='text' height={50} width={250} />
      ) : (
        !autocompleteError && (
          <Autocomplete
            id='news filter'
            className={classes.main}
            options={autocompleteData}
            getOptionLabel={(option: any) => option.title}
            onChange={(event: any, newValue: any | null) =>
              handleAutocomplete(event, newValue)
            }
            renderInput={(params: any) => (
              <TextField
                {...params}
                className={classes.content}
                placeholder='Search...'
                variant='outlined'
              />
            )}
          />
        )
      )}
    </>
  );
};

export { FieldAutocompleted };
