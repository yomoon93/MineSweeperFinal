const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    const board = [];
    for(let rowIndex= 0; rowIndex < numberOfRows; rowIndex++){
        let row = [];
        for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
            row.push(' ');
            board.push(row);
        }
        return board;
    }
}
const generateBombBoard = (numberOfRows, numberOfColumns,numberOfBombs) =>  {
    const board = [];
    for(let rowIndex= 0; rowIndex < numberOfRows; rowIndex++){
        let row = [];
        for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
            row.push(null);
              }
            board.push(row);
        }
       let numberOfBombsPlaced = 0;
        while(numberOfBombsPlaced < numberOfBombs) // This while loop has the potential to place bombs on top of already existing bombs
        {
            let randomRowIndex = Math.floor(Math.random()* numberOfRows);
            let randomColumnIndex = Math.floor(Math.random()* numberOfColumns);
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }
        
        
        
        
        return board;
};

const printBoard = board => {
    board.map(row => row.join(' | '));
   console.log(board.map(row => row.join (' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4, 5);

console.log('Player Board (Char): ');
printBoard(playerBoard);
console.log('Bomb Board Bitcchessssss: ');
printBoard(bombBoard);
























