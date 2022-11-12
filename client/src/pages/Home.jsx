import React from 'react';

import Banner from '../components/Banner';
import Header from '../components/Header';
import MySlider from '../components/MySlider';
import IGStory from '../components/IGStory';
import Highlights from '../components/Highlights';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';
import DeveloperInfo from '../components/DeveloperInfo';

function Home() {
  return (
    <>
    
      <Banner/> 
      <Header/>
      <MySlider/>
      <IGStory/>
      <Highlights/>
      <Showcase/>
      <Footer/>
      <DeveloperInfo/>
    </>
  );
}

export default Home;
