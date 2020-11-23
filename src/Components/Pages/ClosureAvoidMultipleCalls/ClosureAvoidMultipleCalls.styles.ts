import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

//Definimos estilo de nuestra MainPage
export default makeStyles({
  main: {
    backgroundColor: teal[50],
    width: '100%',
    marginBottom: 15,
    paddingTop: 15,
    paddingBottom: 10,
    color: teal[700],
    fontFamily: 'Works Sans',
  },
  aLink: {
    textDecoration: 'none',
  },
});
