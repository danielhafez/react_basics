import React from 'react';
import './App.css';
import AlertAlive from './components/AlertAlive';

function App() {
  return (
    <div className='App'>
      <AlertAlive message={'Hello!'}></AlertAlive>
    </div>
  );
}

export default App;
