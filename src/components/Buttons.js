import React from 'react';
import { Button } from 'semantic-ui-react';

const Buttons = (props) => (
  <div className='controls'>
    {props.running ?
      <Button content='Stop' icon='stop' labelPosition='right' onClick={props.stop} /> :
      <Button content='Start' icon='play' labelPosition='right' onClick={props.start} />
    }
    <Button content='Clear' icon='x' labelPosition='right' onClick={props.clear} />
    
  </div>
);

export default Buttons;