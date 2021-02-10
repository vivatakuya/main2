import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '80ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="event" label="イベント名" />
      <TextField id="filled-basic" label="days" variant="filled" />
      <TextField id="outlined-basic" label="詳細" variant="outlined" />
    </form>
  );
}