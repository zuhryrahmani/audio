// main
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';

// components
import TextField from '../../components/TextField';
import GeneralButton from '../../components/Button';

// assets
import background from '../../assets/images/background.png';
import mail from '../../assets/icons/mail.svg';
import lock from '../../assets/icons/lock.svg';
import apple from '../../assets/icons/apple.svg';
import facebook from '../../assets/icons/facebook.svg';
import google from '../../assets/icons/google.svg';

const SignUp = () => {
  const useStyles = makeStyles({
    container: {
      maxWidth: 480,
      height: '100vh',
      margin: '0 auto',
      background: `url(${background}) no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '62px 24px 0',
      textAlign: 'center',
      color: '#fff',
      position: 'relative'
    },
    title: {
      fontSize:51,
      fontWeight:700
    },
    subtitle: {
      fontWeight: 500,
      marginTop: 7
    },
    info: {
      position: 'absolute',
      bottom: 120,
      left: 24,
      right: 24,
      minHeight: 100
    },
    here: {
      color: '#0ACF83',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    button: {
      height: 52,
      width: 52,
      borderRadius: 9.4,
      margin: '0 7.5px',
      backgroundColor: '#fff'
    }
  });
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return(
    <div className={classes.container}>
      <div className={classes.title}>Audio</div>
      <div className={classes.subtitle}>It's modular and designed to last</div>
      <div className={classes.info}>
        <div>
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
            icon={mail}
          />
        </div>
        <div style={{margin: '20px 0'}}>
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            icon={lock}
            type='password'
          />
        </div>
        <div style={{margin:'20px 0 24px'}}>
          <GeneralButton onClick={() => history.push('/home')}>Sign Up</GeneralButton>
        </div>
        <div style={{margin:'42px 0 24px'}}>
          {[apple, facebook, google].map(item => (
            <Button
              variant='contained'
              disableElevation
              className={classes.button}
            >
              <img src={item} />
            </Button>
          ))}
        </div>
        <div>If you have an account? <span className={classes.here} onClick={() => history.push('/')}>Sign In here</span></div>
      </div>
    </div>
  );
};

export default SignUp;