import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'

import MainInt from './MainInt'
import Main from './Main'




const App = props => {
  return (
  <div> 
   <div>
      <h1>Hello dear customer, please follow the instruction!</h1>
      <Main/></div>
        <div><Router><Route path="/mainint" component={MainInt} />
                </Router>
    </div>
  </div>  
  );
}

export default App

