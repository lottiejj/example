import Home from './components/home'
import { useEffect, useState } from 'react';
const myElement = (
  <div className='main'>
    <Home />
  </div>
);
const CLIENT_ID = '191961a6acf64c7980c12a6ce419b673';
const CLIENT_SECRET = '6f0c927ecdeb44fca968a32bea49d2fe';

function App() {

  return myElement;
}

export default App;
