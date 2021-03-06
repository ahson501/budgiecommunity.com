import React from 'react';
import { Button } from './Button';
import './videos.css';
import '../App.css';


function videos() {
    return (
        <div className='video-container'>
            <video src='/inni videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='video-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER  <i className='far fa-play-circle'/>
        </Button>
        </div>
      </div>
        
    )
}

export default videos
