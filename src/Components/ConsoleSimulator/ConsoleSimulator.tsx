import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    backgroundColor: teal[900],
  },
  textTitle: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: '15px',
  },
  text: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: '13px',
  },
});

export function ConsoleSimulator({ commands }: { commands: string[] }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.textTitle}>
              Console Simulator
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {commands.map((command) => (
            <TableRow className={classes.text} key={command}>
              {' > '}
              {command}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
