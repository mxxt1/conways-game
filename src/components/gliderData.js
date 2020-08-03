import { alive,newGrid } from './gameLogic';

export const gliderData = preset => {
    let new_grid = newGrid();
    switch (preset) {
        case 'glider':
            return glider(new_grid);
        case 'gliderGun':
            return gliderGun(new_grid);
        default:
            return new_grid;
    }
}

const glider = board => {
    board[3][1] = alive;
    board[3][2] = alive;
    board[3][3] = alive;
    board[2][3] = alive;
    board[1][2] = alive;
    return board;
}


const gliderGun = board => {
    board[5][1] = alive;
    board[5][2] = alive;
    board[6][1] = alive;
    board[6][2] = alive;

    board[3][13] = alive; 
    board[3][14] = alive;
    board[4][12] = alive; 
    board[4][16] = alive;
    board[5][11] = alive; 
    board[5][17] = alive;
    board[6][11] = alive; 
    board[6][15] = alive;
    board[6][17] = alive; 
    board[6][18] = alive;
    board[7][11] = alive; 
    board[7][17] = alive;
    board[8][12] = alive; 
    board[8][16] = alive;
    board[9][13] = alive; 
    board[9][14] = alive;

    board[1][25] = alive;
    board[2][23] = alive; 
    board[2][25] = alive;
    board[3][21] = alive; 
    board[3][22] = alive;
    board[4][21] = alive; 
    board[4][22] = alive;
    board[5][21] = alive; 
    board[5][22] = alive;
    board[6][23] = alive; 
    board[6][25] = alive;
    board[7][25] = alive;

    board[3][35] = alive; 
    board[3][36] = alive;
    board[4][35] = alive; 
    board[4][36] = alive;

    return board;
}