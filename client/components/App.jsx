import React from 'react';

import Main from './Main'
import SignIn from './SignIn';
import SignUp from './SignUp';

const initialText = 'Please make a new account or go to existing one';

const App = () => {
  return (
    <div>
      <h1>Hello dear customer, please follow the instruction!</h1>
      <Main/>
    </div>
  );
}

export default App

