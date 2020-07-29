import React from 'react';
import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactPlayer url='https://www.youtube.com/watch?v=oYDnmDNdSIA'
      controls

      onReady={() => console.log('onReady callback')}
      onStart={() => console.log('onStart callback')}
      onPause={() => console.log('onPause callback')}
      onError={() => console.log('onError callback')}
      
      />
    </div>
  );
}

export default App;
