export const alive = 1;
export const dead = 0;
export const gridSize = 50;


export const newGrid = () => {

    return Array(gridSize)
    .fill()
    .map(() => 
        Array(gridSize)
    .fill(dead));

}

// identify the neighbors for each cell
export const neighbors = (x,y) => {
    const neighbor_arr = [
        [x-1, y+1],
        [x, y+1],
        [x+1, y+1],
        [x-1, y],
        [x+1, y],
        [x-1, y-1],
        [x, y-1],
        [x+1, y-1]
    ]

    return neighbor_arr.filter(coor => 
        coor[0] >= 0 && coor[1] >= 0 && coor[0] < gridSize && coor[1] < gridSize
    )
}

export const findAlive = (grid, x, y) => {
    let alive_neigh = neighbors(x, y)

    return alive_neigh.filter(x => grid[x[0]][x[1]] === alive)

}