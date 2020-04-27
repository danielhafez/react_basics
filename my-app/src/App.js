import React from 'react';
import './App.css';
import users from './Day2/user-data';
import PresentUsers from './Day2/PresentUser';

function App() {
  return (
    <div className='App'>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
        integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
        crossorigin='anonymous'
      />

      <PresentUsers></PresentUsers>
    </div>
  );
}

export default App;
