import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

export default makeStyles({
  img: {
    width: '90%',
  },
  button: {
    paddingBottom: 10,
    textDecoration: 'none',
    '& > *': {
      backgroundColor: teal[700],
      color: 'white',
    },
  },
});
