const generatePlayerBoard = (numberOfRows, numberOfColumns)=>
{
var board = [];
    for( let row = 0 ; row < numberOfRows; row++ );
    {
        var row =[];
        for(let column = 0; column < numberOfColumns; column++)
        {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs)=>
{
var board = [];
    for( let row = 0 ; row < numberOfRows; row++ );
    {
        var row =[];
        for(let column = 0; column < numberOfColumns; column++)
        {
            row.push(null);
        }
        board.push(row);
    }
    
    
    
      
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs)// The while loop has the potential to place bombs on already existing bombs//
    {
       const randomRowIndex = Math.floor(Math.random()* numberOfRows);
       const randomColumnIndex = Math.floor(Math.random()* numberOfColumns);
        
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;    
    }
    return board;
    
    }
const printBoard = board =>
{
   
   console.log(board.map(row => row.join(' | ')).join('.\n'));
};

const playerBoard = generatePlayerBoard(3, 3);
const bombBoard = generateBombBoard(3, 2, 2);
printBoard(bombBoard);


