import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '100ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="イベント名" />
      <TextField id="filled-basic" label="日時" variant="filled" />
      <TextField id="outlined-basic" label="詳細" variant="outlined" />
    </form>
    <Button variant="contained">Default</Button>
    <Button variant="contained" color="secondary">
        Secondary </Button>
     </>

  );
}
