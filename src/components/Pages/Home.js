import React from 'react';
import Footer from '../Footer';
import Videos from '../Videos';
import '../../App.css';
import ReactPlayer from 'react-player'

function Home() {
  return ( 
    <>
     <Footer />
     <Videos /> 
     <ReactPlayer />  
    </>
  );
}

export default Home;




