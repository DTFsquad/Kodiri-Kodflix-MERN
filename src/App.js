import React from 'react';
import theMistCover from './the-mist.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={theMistCover} className='image-cover' alt='theMistCover' />
    </div>
  );
}

export default App;
