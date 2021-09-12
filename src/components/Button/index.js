// main
import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const GeneralButton = ({children, width='100%', height=50, onClick}) => {
  const useStyles = makeStyles({
    button: {
      fontSize: 16,
      textTransform: 'capitalize',
      fontWeight: 500,
      borderRadius: 10,
      width: width,
      height: height
    }
  });
  const classes = useStyles();
  return(
    <Button
      disableElevation
      variant='contained'
      color='primary'
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default GeneralButton;