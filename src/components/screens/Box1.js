import React from 'react';
import Card from './Card';
import SearchHeader from './SearchHeader';

const Box1 = () => {
  return (
    <div>
      <div
        id='box1'
        className='row boxes'
        style={{ paddingLeft: '10%', paddingRight: '10%' }}
      >
        <div>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Box1;
