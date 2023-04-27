'use strict';

import React, { Component } from 'react'
import Square from './Square';
import Button from './Button';

/* class App extends Component {
  render() {
    return (
      <div className="container">
        {['blue', 'red', 'green'].map((square => (
          <Square color='blue'/>
        )))}
      
      </div>
    )
  }
} */

 const App = () => {
  
  return (
   <div className="container" onClick={() => alert('Clicou')
   }>
     <Button>Texto</Button> 
    </div>
  )
}
 
export default App
