import React from 'react';
import './App.css';
import Box1 from './Boxes';
import ChildrenBox from './ChildrenBox';

function App() {
  return (
    <div className='App'>
      <Box1>
        {' '}
        <ChildrenBox>
          <ChildrenBox class={'Box3'}>
            <ChildrenBox class={'Box4'}></ChildrenBox>
            <ChildrenBox class={'Box4'}></ChildrenBox>
          </ChildrenBox>
        </ChildrenBox>
      </Box1>
    </div>
  );
}

export default App;
