import React, { Component } from 'react';
import { updateArr } from './gameLogic';

class Grid extends Component {

  switchCell = (cell, x, y) => {
    const { grid } = this.props;
    const row = updateArr(grid[y], x, cell ? 0 : 1);
    const newgrid = updateArr(grid, y, row);
    this.props.onChange(newgrid);
  }

  showCell = (cell, x, y) => {
    return (
      <div key={x}
        className='cell'
        onMouseDown={() => this.switchCell(cell, x, y)}
        style={{ backgroundColor: cell ? 'white' : null }}
      />
    );
  }

  showRow = (row, y) => (
    <div className='row' key={y}>
      {row.map((cell, x) => this.showCell(cell, x, y))}
    </div>
  )

  render() {
    return (
      <div className='grid'>
        {this.props.grid.map((row, y) => this.showRow(row, y))}
      </div>
    );
  }

}

export default Grid;