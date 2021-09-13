// main
import React from 'react';
import { makeStyles } from '@material-ui/core';

const Slider = ({children, height=25, left=0}) => {
  const useStyles = makeStyles({
    slider: {
      height: height,
      overflowX: 'auto',
      position: 'relative',
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      scrollbarWidth: 'none'
    },
    scroll: {
      display: 'flex',
      position: 'absolute',
      top: 0,
      left: left,
      bottom: 0
    }
  });
  const classes = useStyles();
  return(
    <div className={classes.slider}>
      <div className={classes.scroll}>
        {children}
      </div>
    </div>
  );
};

export default Slider;