import React, { Component } from 'react';
import './App.css';
import Cover from './cover/Cover';
import blackMirror from './cover/images/black-mirror.jpg';
import breakingBad from './cover/images/breaking-bad.jpg';
import deathNote from './cover/images/death-note.jpg';
import gameOfTHrones from './cover/images/game-of-thrones.jpg';
import theWalkingDead from './cover/images/the-walking-dead.jpg';
import theWire from './cover/images/the-wire.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='image-cover-row'>          
            <Cover image={blackMirror} title='Black Miror' />
            <Cover image={breakingBad} title='Breaking Bad' />
            <Cover image={deathNote} title='Death Note' />
       </div>
        <div className='image-cover-row'>
          <Cover image={gameOfTHrones} title='Game of Thrones' />
          <Cover image={theWalkingDead} title='The Walking Dead' />
          <Cover image={theWire} title='The Wire' />
        </div>
      </div>
    );
  }
}
  
  
  


export default App;
