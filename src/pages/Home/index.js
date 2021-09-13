// main
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

// components
import TextField from '../../components/TextField';
import Slider from '../../components/Slider';

// assets
import menu from '../../assets/icons/menu.svg';
import avatar from '../../assets/images/avatar.png';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';

const Home = () => {
  const useStyles = makeStyles({
    container: {
      maxWidth: 480,
      backgroundColor: '#fff',
      margin: '0 auto',
      paddingTop: 6
    },
    header: {
      height: 35,
      lineHeight: '35px',
      position: 'relative',
      marginBottom: 29
    },
    avatar: {
      width: 35,
      height: 35,
      objectFit: 'cover',
      objectPosition: 'center',
      float: 'right',
      cursor: 'pointer'
    },
    logo: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      height: 25,
      lineHeight: '25px',
      cursor: 'pointer'
    },
    title: {
      fontSize: 19.05,
      fontWeight: 700,
      marginLeft: 7.14
    },
    desc: {
      fontSize: 24,
      fontWeight: 700,
      margin: '5px 0 25px'
    },
    containerBottom: {
      backgroundColor: '#F6F6F6',
      minHeight: 300,
      marginTop: 25,
      borderRadius: 30,
      paddingTop: 32
    },
    tag: {
      height: 25,
      padding: '2.5px 15px',
      borderRadius: 30,
      cursor: 'pointer'
    }
  });
  const classes = useStyles();
  const [tabActive, setTabActive] = useState('Headphone');
  return(
      <div className={classes.container}>
        <div style={{padding:'0 24px'}}>
          <div className={classes.header}>
            <img src={menu} style={{verticalAlign:'middle',cursor:'pointer'}} />
            <div className={classes.logo}>
              <img src={logo} style={{verticalAlign:'top',marginTop:2}}/>
              <span className={classes.title}>Audio</span>
            </div>
            <img src={avatar} className={classes.avatar} />
          </div>
          <div style={{fontSize:16}}>Hi, Andrea</div>
          <div className={classes.desc}>What are you looking for today?</div>
          <TextField
            placeholder='Search headphone'
            icon={search}
          />
        </div>
        
        <div className={classes.containerBottom}>
          <Slider left={24}>
            {['Headphone','Headband','Earpads','Cable','Earphone','Headset'].map((item,i) => (
              <div
                className={classes.tag}
                style={{
                  marginRight:i===5 ? 24 : 10,
                  color: item===tabActive ? '#fff' : '#7F7F7F',
                  backgroundColor: item===tabActive ? '#0ACF83' : 'transparent'
                }}
                onClick={() => setTabActive(item)}
              >
                {item}
              </div>
            ))}
          </Slider>
        </div>
      </div>
  );
};

export default Home;