import React from 'react';
import './App.css';
import Travel from './Travel';

function App() {
  return (
    <div className='App'>
      <h1 className='title '>Travel Destinations: </h1>
      <ul>
        <Travel
          name={'London'}
          imageUrl={'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875_1280.jpg'}
          locationUrl={'https://goo.gl/maps/HB9b9Sc6BM4StGHRA'}
        ></Travel>
        <Travel
          name={'Moscow'}
          imageUrl={'https://cdn.pixabay.com/photo/2016/07/30/08/13/moscow-1556561_1280.jpg'}
          locationUrl={'https://goo.gl/maps/YzBDp7EVzjiqeUpA8'}
        ></Travel>
        <Travel
          name={'Tokyo'}
          imageUrl={'https://cdn.pixabay.com/photo/2013/11/25/09/52/japan-217882_1280.jpg'}
          locationUrl={'https://goo.gl/maps/t4KU1m1w4tuzfDif8'}
        ></Travel>
      </ul>
    </div>
  );
}

export default App;
