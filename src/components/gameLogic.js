export const alive = 1;
export const dead = 0;
export const gridSize = 50;
export const speed = 100;

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

export const newGrid = () => {

    return Array(gridSize)
    .fill()
    .map(() => 
        Array(gridSize)
    .fill(dead));

}

export const findAlive = (grid, x, y) => {
    let alive_neigh = neighbors(x, y)

    return alive_neigh
            .filter(x => grid[x[0]][x[1]] === alive)
            .length

}

export const newGeneration = grid => {
    let new_grid = newGrid()

    for (let i=0; i<gridSize;i++){
        for (let j=0;j<gridSize;j++){
            let living = findAlive(grid, i, j)
            let cell = grid[i][j]
            new_grid[i][j] = ((living === 3) || (living === 2 && cell === alive)) ? alive : dead 
        }
    }
    return new_grid
}


export const updateArr = (arr, i, val) => [
    ...arr.slice(0, i), val, ...arr.slice(i + 1)
];

export const random = board => board.map(row => row.map(cell => Math.round(Math.random())));