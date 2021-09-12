// main
import React from 'react';
import { makeStyles } from '@material-ui/core';

const GeneralTextField = ({value, onChange, placeholder, icon, height=50, width='100%'}) => {
  const useStyles = makeStyles({
    inputContainer: {
      width: width,
      position: 'relative'
    },
    input: {
      width: '100%',
      height: height,
      borderRadius: 10,
      border: '1px solid #BABABA',
      outline: 'none',
      boxSizing: 'border-box',
      color: '#000',
      padding: '0 15px 0 47px',
      fontFamily: 'DM Sans, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      transition: '0.3s',
      '&:hover': {
        borderColor: '#000'
      },
      '&:focus': {
        border: '2px solid #0ACF83'
      },
      '&::placeholder': {
        color: '#BABABA'
      }
    },
    icon: {
      position: 'absolute',
      height: 20,
      width: 20,
      left: 15,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    img: {
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    }
  });
  const classes = useStyles();
  return(
    <div className={classes.inputContainer}>
      <div className={classes.icon}>
        <img src={icon} className={classes.img} />
      </div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classes.input}
      />
    </div>
  );
};

export default GeneralTextField;