import React, {Component} from 'react';
import Grid from './Grid';
import Buttons from './Buttons';
import Presets from './Presets';
import {gliderData} from './gliderData'
import {speed,newGrid,newGeneration,random } from './gameLogic';

class Game extends Component {

  state = {
    grid: gliderData(''),
    generation: 0,
    running: false,
  }

  changeState = (grid, generation) => this.setState({
    grid: grid,
    generation: generation,
  });

  onChange = grid => {
    if (this.state.running === true){
      this.changeState(grid, this.state.generation + 1);
    } else if (this.state.running === false && this.state.generation === 0) {
      this.changeState(grid, this.state.generation);
    } else {
      this.changeState(grid,this.state.generation+1)
    }
  } 

  onClear = () => this.changeState(newGrid(), 0);

  onRandom = () => this.changeState(random(this.state.grid), 0);

  onPresetSelect = preset => this.changeState(gliderData(preset), 0);

  onNext = () => {
    this.onChange(newGeneration(this.state.grid));
  } 

  onStart = () => {
    this.setState({ running: true });
    this.interval = setInterval(() => this.onNext(), speed);
  }

  onStop = () => {
    this.setState({ running: false });
    clearInterval(this.interval);
  }

  render() {
    const { grid, running } = this.state;
    return (
      <div>
        <Buttons
          clear={this.onClear}
          next={this.onNext}
          play={this.onStart}
          stop={this.onStop}
          random={this.onRandom}
          running={running}
        />
        <Presets
          load={this.onPresetSelect}
          running={running}
        />
        <p style={{textAlign: "center"}}>Generation: {this.state.generation}</p>
        <Grid grid={grid} onChange={this.onChange} />
        
        
      </div>
    );
  }

}

export default Game;
