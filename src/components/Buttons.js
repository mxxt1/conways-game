import React from 'react';
import { Button } from 'semantic-ui-react';

const Buttons = (props) => (
  <div style={{textAlign: "center"}}>
    {props.running ?
      <Button content='Stop' icon='stop' labelPosition='right' onClick={props.stop} /> :
      <Button content='Start' icon='play' labelPosition='right' onClick={props.play} />
    }
    <Button content='Clear' icon='x' labelPosition='right' onClick={props.clear} />
    <Button content='Randomize' icon='arrows alternate' labelPosition='right'
      onClick={props.random} disabled={props.running}
    />
    
    <Button content='Next Gen' icon='right arrow' labelPosition='right' onClick={props.next} />
    
  </div>
);

export default Buttons;