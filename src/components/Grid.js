import React, { Component } from 'react';

class Grid extends Component {

  defaultBoard = () => {
    const alive = 1;
    const dead = 0;
    const gridSize = 50;

    return Array(gridSize).fill().map(() => Array(gridSize).fill(dead));
  }

  newboard = this.defaultBoard()

  gridCell = (cell, x, y) => {
    return (<div key={x} className='cell' />);
  }

  gridRow = (row, y) => (
    <div className='row' key={y}>
      {row.map((cell, x) => this.gridCell(cell, x, y))}
    </div>
  )

  render() {
    return (
      <div className='game-grid'>
        {this.newboard.map((row, y) => this.gridRow(row, y))}
      </div>
    );
  }

}

export default Grid;