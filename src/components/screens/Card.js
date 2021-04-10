import React from 'react';
import logo from '../../images/1445-122-160418-020439.png'; // Tell Webpack this JS file uses this image

const Card = () => {
  return (
    <div>
      <div className='col s12 m6'>
        <div className='card'>
          <div className='card-image'>
            <img src={logo} height='300px' width='200px'></img>
            <span className='card-title'>Card Title</span>
          </div>
          <div className='card-content'>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className='card-action'>
            <a href='#'>This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
