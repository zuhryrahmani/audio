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
import arrow from '../../assets/icons/arrow-right.svg';
import headset from '../../assets/images/headset.png';
import cable from '../../assets/images/cable.png';

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
      padding: '32px 0 24px'
    },
    tag: {
      height: 25,
      padding: '2.5px 15px',
      borderRadius: 30,
      cursor: 'pointer'
    },
    box1: {
      width: 326,
      height: 178,
      backgroundColor: '#fff',
      borderRadius: 10,
      position: 'relative',
      cursor: 'pointer'
    },
    box1img: {
      position: 'absolute',
      top: 20,
      right: 24,
      width: 117,
      height: 135,
      objectFit: 'contain',
      objectPosition: 'center'
    },
    box1info: {
      width: 151,
      position: 'absolute',
      left: 24,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    box1name: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 22,
      fontWeight: 700
    },
    box1shop: {
      color: '#0ACF83',
      fontWeight: 700,
      height: 20,
      marginTop: 29
    },
    box2: {
      backgroundColor: '#fff',
      borderRadius: 10,
      width: 155,
      height: 213,
      cursor: 'pointer',
      textAlign: 'center'
    },
    box2img: {
      height: 125,
      width: 125,
      margin: '15px 0',
      objectFit: 'contain',
      objectPosition: 'center'
    }
  });
  const classes = useStyles();
  const [tabActive, setTabActive] = useState('Headphone');
  const [mainProducts, setMainProducts] = useState([
    {
      name: 'TMA-2 Modular Headphone',
      image: headset
    },
    {
      name: 'TMA-2 DJ Modular',
      image: headset
    }
  ]);
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      name: 'TMA-2 HD Wireless',
      price: 350,
      image: headset
    },
    {
      name: 'C02 - Cable',
      price: 25,
      image: cable
    },
    {
      name: 'XYZ - Cable',
      price: 30,
      image: cable
    }
  ]);
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
        <div style={{margin:'20px auto'}}>
          <Slider left={24} height={178}>
            {mainProducts.map((item,i) => (
              <div
                className={classes.box1}
                style={{marginRight:i===mainProducts.length-1 ? 25 : 15}}
                onClick={() => {}}
              >
                <div className={classes.box1info}>
                  <div className={classes.box1name}>{item.name}</div>
                  <div className={classes.box1shop}><span style={{lineHeight:'20px',marginRight:12}}>Shop now</span><img src={arrow} style={{verticalAlign:'bottom'}} /></div>
                </div>
                <img src={item.image} className={classes.box1img} />
              </div>
            ))}
          </Slider>
        </div>
        <div style={{padding:'0 24px',marginBottom:20}}><span style={{fontSize:16}}>Featured Products</span><span style={{color:'#7F7F7F',float:'right',lineHeight:'20px'}}>See All</span></div>
        <Slider left={24} height={213}>
          {featuredProducts.map((item,i) => (
            <div
              className={classes.box2}
              style={{marginRight:i===featuredProducts.length-1 ? 24 : 15}}
            >
              <img src={item.image} className={classes.box2img} />
              <div style={{margin: '0 10px', textAlign:'left'}}>
                <div style={{marginBottom:4}}>{item.name}</div>
                <div style={{fontSize:12, fontWeight:700}}>USD {item.price}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;