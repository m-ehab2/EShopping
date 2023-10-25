import * as React from 'react';
import Header from './LandingPage/Header';
import WebFont from 'webfontloader';
import Carasoul from './LandingPage/Carasoul';

export default function Home() {
  
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Comfortaa', 'Rosario']
      }
    });
   }, []);
    return (
      <div className='Home'>
      <Header/>
      <Carasoul/>
      </div>
       );
}
