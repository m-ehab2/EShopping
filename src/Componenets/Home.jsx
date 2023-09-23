import * as React from 'react';
import Header from './LandingPage/Header';
import WebFont from 'webfontloader';

export default function Home() {
  
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Comfortaa', 'Rosario']
      }
    });
   }, []);
    return (
        <Header/>
      );
}
