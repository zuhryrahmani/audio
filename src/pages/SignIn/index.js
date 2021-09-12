// main
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

// components
import TextField from '../../components/TextField';
import Button from '../../components/Button';

// assets
import background from '../../assets/images/background.png';
import mail from '../../assets/icons/mail.svg';
import lock from '../../assets/icons/lock.svg';

const SignIn = () => {
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
      bottom: 79,
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
          />
        </div>
        <div style={{fontWeight:500}}>Forgot Password</div>
        <div style={{margin:'32px 0 24px'}}>
          <Button onClick={() => history.push('/home')}>Sign In</Button>
        </div>
        <div>Didn’t have any account? <span className={classes.here} onClick={() => history.push('/signup')}>Sign Up here</span></div>
      </div>
    </div>
  );
};

export default SignIn;