import React from 'react';

import Intro from './Intro';

const initialText = 'Lisa';

const App = () => {
  return (
    <div>
      <h1>React development has begun!</h1>
      <Intro lisa={initialText}/>
    </div>
  );
}

export default App

