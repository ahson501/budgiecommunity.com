import React from 'react';
import './Footer.css';
import { Button } from './Button';



function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure of Inni budgie world
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe me at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
     
          </div>
        
      
  );
}

export default Footer;