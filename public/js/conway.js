function stepBoard(board) {

    //empty board case handling
    if (board.length === 0 || board[0].length === 0) {
        return board.slice();
    }
    
    let rows = board.length;
    let cols = board[0].length;   
    let newBoard = [];


    for (let row = 0; row < rows; row++) {
        newBoard[row] = [];

        for (let col = 0; col < cols; col++) {
            let currentNeighbors = 0;

            /* neighboring cells check:
            - If the cell is alive, then it stays alive if it has either 2 or 3 alive neighbors
            - If the cell is dead, then it revives only if it has 3 alive neighbors
            */

            for (let rowChange = -1; rowChange <= 1; rowChange++) {
                for (let colChange = -1; colChange <= 1; colChange++) {
                    
                    if (rowChange === 0 && colChange === 0) 
                        continue;        

                    let neighborRow = row + rowChange;
                    let neighborCol = col + colChange;

               
                    if (neighborRow >= 0 && neighborRow < rows 
                        && neighborCol >= 0 && neighborCol < cols
                        && board[neighborRow][neighborCol]) {
                            
                            currentNeighbors++;
                }
            }
        }
        
        if (board[row][col]) {
                if (currentNeighbors === 2 || currentNeighbors === 3) {
                    newBoard[row][col] = true;
                } else {
                    newBoard[row][col] = false;
            }
        } else {
            if (currentNeighbors === 3) {
                newBoard[row][col] = true;
            } else {
                newBoard[row][col] = false;
            }
        }
    }
}
    return newBoard;

}