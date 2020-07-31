import React, { Component } from 'react';
import Game from './components/Game';
import { Divider } from 'semantic-ui-react';


class App extends Component {

  render() {
    return (
      <div>
        <Game />
        <Divider />        
      </div>

    );
  }
}

export default App;