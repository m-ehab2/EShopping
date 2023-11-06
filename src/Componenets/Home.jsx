import * as React from 'react';
import Header from './LandingPage/Header';
import WebFont from 'webfontloader';
import Carasoul from './LandingPage/Carasoul';
import NeuCarasoul from './LandingPage/NeuCarasoul';

export default function Home() {
  
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Comfortaa', 'Rosario','Roboto']
      }
    });
   }, []);
    return (
      <div className='Home'>
      <Header/>
      <NeuCarasoul/>
      </div>
       );
}
