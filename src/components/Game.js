import React, { Component } from 'react';
import Grid from './Grid';
import Buttons from './Buttons';
import { newGrid } from '../gameLogic';

class Game extends Component {

  state = {
    grid: "",
    generation: 0,
    running: false,
  }

  updateState = (grid, generation) => this.setState({
    grid: grid,
    generation: generation,
  });

  onStart = () => {
    this.setState({running:true})
    console.log(this.state.running)
  }

  onStop = () => {
    this.setState({ running: false });
    console.log(this.state.running)
    // clearInterval(this.interval);
  }

  onChange = grid => {
      this.updateState(grid, this.state.generation + 1);
  }

  onClear = () => {
      this.updateState(newGrid(),0)
  }



  render() {
    const { board, running } = this.state;
    return (
      <div>
        <Buttons
          clear={this.onClear}
          next={this.onNext}
          start={this.onStart}
          stop={this.onStop}
          randomize={this.onRandomize}
          running={running}
        />
        <p className="generation">Generation: {this.state.generation}</p>
        <Grid board={board} onChange={this.onChange} />
        
        
      </div>
    );
  }

}

export default Game;