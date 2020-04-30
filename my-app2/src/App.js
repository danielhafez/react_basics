import React from 'react';
import './App.css';
import AlertAlive from './components/AlertAlive';
import Checkbox from './components/Checkbox';

function App() {
  return (
    <div className='App'>
      <Checkbox>
        {' '}
        <AlertAlive message={'You checked the box!'}></AlertAlive>
      </Checkbox>
    </div>
  );
}

export default App;
