import React from 'react';
import logo from '../../images/bureau.png'; // Tell Webpack this JS file uses this image

const Box2 = () => {
  return (
    <div id='box2' className='boxes'>
      <img src={logo} style={{ maxWidth: '100%' }}></img>
    </div>
  );
};

export default Box2;
