import React from 'react'

import  Banner  from './components/Banner';
import  Header  from './components/Header';
import  MySlider  from './components/MySlider'
import  IGStory  from './components/IGStory';
import  Highlights  from './components/Highlights';
import  Showcase  from './components/Showcase';
import  Footer  from './components/Footer';

function Home() {
  return (
    <>
     <Banner/>{/* Lazım olunca en üstte bir şeyler göstermek adına */}
      <Header/>{/* Menüleri içerir. */}
      <MySlider/>{/* Genel Bilgilendirme Slaytları içerir */}
      <IGStory/>{/* IG Story */}
      <Highlights/>{/* Öne Çıkanlar */}
      <Showcase/>{/* Vitrin */}
      <Footer/>{/* Footer */}
    </>
  )
}

export default Home