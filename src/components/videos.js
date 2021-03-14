import React from 'react';
import './Videos.css';
import '../App.css';
import ReactPlayer from 'react-player'

function Videos() {
    return (
        <div className="video-container">
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      
      </div>);
      }

      export default Videos;
    